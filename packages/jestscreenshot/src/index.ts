/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/promise-function-async */

import { Page } from 'puppeteer';
import moment from 'moment';
import mkdirp from 'mkdirp';

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

/**
 * @class JestScreenshot
 * @module JestScreenshot
 * @classdesc Jest reporter plugin to take Puppeteer screenshots on failing tests
 * @description The main class of JestScreenshot that should be initialized with config
 * @param {Page} page The Puppeteer page to take a screenshot from
 * @param {string} dirName The directory to create a "screenshots" folder in
 * @param {string} [scriptName=__filename] An optional name of the script that is currently being ran
 */
export class JestScreenshot {
  private page: Page;
  private dirname: string;
  private sname: string;

  public constructor(options: JestScreenshotOptions) {
    if (!this.objectHasProperty(options, 'page')) {
      throw new Error('Failed to create JestScreenshot Reporter.\nYou should pass the Puppeteer page to the options!!');
    }
    if (!this.objectHasProperty(options, 'dirName')) {
      throw new Error('Failed to create JestScreenshot Reporter.\nYou should pass the directory to save images to the options!!');
    }

    this.page = options.page;
    this.dirname = options.dirName;
    this.sname = this.objectHasProperty(options, 'scriptName') ? options.scriptName as string : __filename;
  }

  /**
   * @method JestScreenshot#run
   * @description Runs the JestScreenshot reporter
   * @returns {Promise<void>} JestScreenshot reporter will have been initialiazed as a side effect for this test suite
   * @example
   * ```ts
   *    const jestScreenshotOptions: JestScreenshotOptions = {
   *      page,
   *      dirName: path.resolve(__dirname),
   *    };
   *
   *    const jestScreenshot = new JestScreenshot(jestScreenshotOptions);
   *
   *    await jestScreenshot.run();
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
    let screenshotPromise: Promise<any> = Promise.resolve();
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
    (jasmine as any).getEnv().addReporter({
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
   * @returns {Promise<Buffer>}
   * @private
   */
  private async takeScreenshot(name: string): Promise<Buffer> {
    const specName = name.replace(/\s/g, '-');
    const filePath = `${this.dirname}/screenshots/fail-${this.sname}-${specName}-${moment().format('YYYY-MM-DD[_]HH.mm.ss')}.png`;

    return this.page.screenshot({path: filePath });
  }

  private objectHasProperty<O extends {}>(obj: O, prop: keyof O) {
    return obj && prop in obj;
  }
}

export default JestScreenshot;