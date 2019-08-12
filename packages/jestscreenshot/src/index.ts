import { Page } from 'puppeteer';
import moment from 'moment';
import mkdirp from 'mkdirp';
import fetch from 'node-fetch';
import Form from 'form-data';

class JestScreenshotError extends Error {
  public constructor(message: string) {
    super();

    this.message = `Failed to create JestScreenshot Reporter.\n${message}`;
  }
}

/**
 * @interface JestScreenshotOptions test
 */
export type JestScreenshotOptions = {
  /** The Puppeteer page to take a screenshot from */
  page: Page;
  /** The directory to create a "screenshots" folder in */
  dirName: string;
  /**
   * @description An optional name of the script that is currently being ran
   * @default __filename
   */
  scriptName?: string;
  /**
   * Optionally upload screenshots to slack after making them
   * Requires you pass a token to the slackToken option, or set the SLACK_WEBTOKEN environment variable
   * @default false
   */
  slackUpload?: boolean;
  /**
   * Token to use when uploading to Slack
   * Only used when slackUpload is set to true
   * @default ''
   */
  slackToken?: string;

  /**
   * Channels to send the Slack upload to
   * Should be an array of Slack channel IDs
   * Only used when slackUpload is set to true
   * @example
   * {
   *   slackChannels: ['C1234567890', 'C2345678901', 'C3456789012']
   * }
   */
  slackChannels?: string[];
};

type JasmineException = {
  actual: '';
  error: Error;
  expected: string;
  matcherName: string;
  message: string;
  passed: boolean;
  stack: string;
};

type JasmineResult = {
  id: string;
  description: string;
  fullName: string;
  failedExceptions: JasmineException[];
  passedExceptions: JasmineException[];
  pendingReason: string;
  testPath: string;
  status: 'failed' | 'passed' | string;
};

export type SlackFile = {
  id: string;
  created: number;
  timestamp: number;
  name: string;
  title: string;
  mimetype: string;
  filetype: string;
  pretty_type: string;
  user: string;
  editable: boolean;
  size: number;
  mode: string;
  is_external: boolean;
  external_type: string;
  is_public: boolean;
  public_url_shared: boolean;
  display_as_bot: boolean;
  username: string;
  url_private: string;
  url_private_download: string;
  thumb_64: string;
  thumb_80: string;
  thumb_360: string;
  thumb_360_w: number;
  thumb_360_h: number;
  thumb_480: string;
  thumb_480_w: number;
  thumb_480_h: number;
  thumb_160: string;
  image_exif_rotation: number;
  original_w: number;
  original_h: number;
  permalink: string;
  permalink_public: string;
  comments_count: number;
  is_starred: boolean;
  shares: {
    private: {
      [key: string]: {
        reply_users: string[];
        reply_users_count: number;
        reply_count: number;
        ts: string;
      };
    };
  };
  channels: string[];
  groups: string[];
  ims: string[];
  has_rich_preview: boolean;
};

export type SlackResponse = {
  ok: boolean;
  file: SlackFile;
};

/**
 * @class JestScreenshot
 * @module JestScreenshot
 * @classdesc Jest reporter plugin to take Puppeteer screenshots on failing tests
 * @description The main class of JestScreenshot that should be initialized with config
 * @param {Page} page The Puppeteer page to take a screenshot from
 * @param {string} dirName The directory to create a "screenshots" folder in
 * @param {string} [scriptName=jest-test] An optional name of the script that is currently being ran
 * @param {boolean} [slackUpload=false] Optionally upload screenshots to slack after making them.
 *
 * Requires you pass a token to the slackToken option, or set the SLACK_WEBTOKEN environment variable
 * @param {string} [slackToken=] Token to use when uploading to slack. Required when you pass slackUpload=true
 *
 * Optionally you can also pass this through the environment variable "SLACK_WEBTOKEN".
 *
 * This option takes priority over the environment variable
 *
 * @param {string[]} [slackChannels=[]] Channels to send the Slack upload to
 *
 * Should be an array of Slack channel IDs
 *
 * Only used when slackUpload is set to true
 */
export class JestScreenshot {
  private page: Page;
  private dirname: string;
  private sname: string;
  private shouldUploadToSlack: boolean;
  private slackToken: string = '';
  private slackChannels: string[] = [];

  public constructor(options: JestScreenshotOptions) {
    if (!this.objectHasProperty(options, 'page')) {
      throw new JestScreenshotError('You should pass the Puppeteer page to the options!!');
    }
    if (!this.objectHasProperty(options, 'dirName')) {
      throw new JestScreenshotError('You should pass the directory to save images to the options!!');
    }

    this.page = options.page;
    this.dirname = options.dirName;
    this.sname = options.scriptName && 'scriptName' in options ? options.scriptName : 'jest-test';
    this.shouldUploadToSlack = options.slackUpload && 'slackUpload' in options ? options.slackUpload : false;

    if (this.shouldUploadToSlack) {
      if (!this.objectHasProperty(options, 'slackToken') || process.env.SLACK_WEBTOKEN) {
        throw new JestScreenshotError('When you want to upload to slack you should either provide the slackToken option or an environment variable called "SLACK_WEBTOKEN"');
      }

      if (options.slackToken) this.slackToken = options.slackToken;
      else this.slackToken = process.env.SLACK_WEBTOKEN!;

      if (!this.slackToken) throw new JestScreenshotError('Failed to set the Slack Token, please verify your options or the SLACK_WEBTOKEN environment variable');

      if (!this.objectHasProperty(options, 'slackChannels')) {
        throw new JestScreenshotError('When you want to upload to slack you provide an array of channels to post the screenshot in through the "slackChannels" options');
      }

      this.slackChannels = options.slackChannels!;

      if (!this.slackChannels || !this.slackChannels.length) {
        throw new JestScreenshotError('Failed to set the Slack channels, please verify your slackChannels option');
      }
    }
  }

  /**
   * @method JestScreenshot#run
   * @description Runs the JestScreenshot reporter
   * @returns {Promise<void>} JestScreenshot reporter will have been initialiazed as a side effect for this test suite
   * @example
   * ```ts
   * const jestScreenshotOptions: JestScreenshotOptions = {
   *   page,
   *   dirName: path.resolve(__dirname),
   *   slackUpload: true,
   *   slackChannels: ['ABCD'],
   *   slackToken: 'YOUR_TOKEN'
   * };
   *
   * const jestScreenshot = new JestScreenshot(jestScreenshotOptions);
   *
   * await jestScreenshot.run();
   * ```
   */
  public async run(): Promise<void> {
    try {
      mkdirp.sync(`${this.dirname}/screenshots`);
    } catch {
      throw new Error('Failed to create screenshots directory, maybe check your permissions?');
    }

    /**
     * Jasmine reporter does not support async.
     * So we store the screenshot promise and wait for it before each test
     */
    let screenshotPromise: Promise<unknown> = Promise.resolve();
    beforeEach(() => screenshotPromise);
    afterAll(() => screenshotPromise);

    /**
     * Take a screenshot on Failed test.
     * Jest standard reporters run in a separate process so they don't have
     * access to the page instance. Using jasmine reporter allows us to
     * have access to the test result, test name and page instance at the same time.
     *
     * Casting jasmine to any because this is an untyped area of Jasmine
     */
    (jasmine as any).getEnv().addReporter({ // eslint-disable-line @typescript-eslint/no-explicit-any
      specDone: async (result: JasmineResult) => {
        if (result.status === 'failed') {
          screenshotPromise = screenshotPromise
            .catch()
            .then(() => this.takeScreenshot(result.fullName));
        }
      },
    });
  }

  /**
   * @method JestScreenshot#takeScreenshot
   * @description Takes a screenshot of the current page
   * @returns {Promise<SlackResponse | Buffer>} Either returns the response from Slack or the screenshot as a Buffer
   * @protected
   */
  protected async takeScreenshot(name: string): Promise<SlackResponse | Buffer> {
    const specName = name.replace(/\s/g, '-');
    const fileName = `fail-${this.sname}-${specName}`;
    const filePath = `${this.dirname}/screenshots/${fileName}-${moment().format('YYYY-MM-DD[_]HH.mm.ss')}.png`;

    const screenshot = await this.page.screenshot({ path: filePath });

    if (this.shouldUploadToSlack) {
      return this.uploadToSlack(screenshot, fileName);
    }

    return screenshot;
  }

  /**
   * @method JestScreenshot#uploadToSlack
   * @description Uploads screenshots to Slack using the provided token
   * @param {Buffer} screenshot base64 representation of the screenshot to upload
   * @returns {Promise<SlackResponse>}
   * @protected
   */
  protected async uploadToSlack(screenshot: Buffer, fileName: string): Promise<SlackResponse> {
    const apiUrl = 'https://slack.com/api';
    const apiMethod = `${apiUrl}/files.upload`;
    const form = new Form();
    form.append('token', this.slackToken);
    form.append('channels', this.slackChannels.join(','));
    form.append('file', screenshot, {
      contentType: 'image/png',
      filename: fileName,
    });
    form.append('filename', fileName);
    form.append('title', fileName);
    form.append('filetype', 'png');

    try {
      const request = await fetch(apiMethod, {
        method: 'POST',
        body: form,
      });

      const data = await request.json() as SlackResponse;

      return data;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * @method JestScreenshot#objectHasProperty
   * @description Validates if an object has a given property
   * @param {object} obj The object to validate
   * @param {string} prop The property to try to find
   * @returns {boolean}
   * @protected
   */
  protected objectHasProperty<O extends {}, K extends keyof O>(obj: O, prop: K): boolean {
    return obj && prop in obj;
  }
}

export default JestScreenshot;
module.exports = JestScreenshot;