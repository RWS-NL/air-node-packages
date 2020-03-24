import chalk from 'chalk';
import { oneLine } from 'common-tags';
import conventionalCommitTypes from '../src/commit-types';
import {
  commitMessage,
  customOptions,
  questionDefault,
  questionFilter,
  questionPrompt,
  questionTransformation,
  questionWhen
} from './engine-utils';

const types = conventionalCommitTypes.types;

const defaultOptions = {
  types,
  maxLineWidth: 100,
  maxHeaderWidth: 100
};

const type = 'func';
const scope = 'everything';
const subject = 'testing123';
const longBody =
  'a a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a' +
  'a a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a' +
  'a a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a aa a';
const longBodySplit =
  longBody.slice(0, defaultOptions.maxLineWidth).trim() +
  '\n' +
  longBody.slice(defaultOptions.maxLineWidth, 2 * defaultOptions.maxLineWidth).trim() +
  '\n' +
  longBody.slice(defaultOptions.maxLineWidth * 2, longBody.length).trim();
const body = 'A quick brown fox jumps over the dog';
const issues = 'a issues is not a person that kicks things';
const longIssues =
  'b b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b' +
  'b b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b' +
  'b b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b bb b';
const breakingChange = 'BREAKING CHANGE: ';
const breaking = 'asdhdfkjhbakjdhjkashd adhfajkhs asdhkjdsh ahshd';
const longIssuesSplit =
  longIssues.slice(0, defaultOptions.maxLineWidth).trim() +
  '\n' +
  longIssues.slice(defaultOptions.maxLineWidth, defaultOptions.maxLineWidth * 2).trim() +
  '\n' +
  longIssues.slice(defaultOptions.maxLineWidth * 2, longIssues.length).trim();

describe('commit message', () => {
  test('only header w/ out scope', () => {
    expect(
      commitMessage({
        type,
        subject
      })
    ).toBe(`${type}: ${subject}`);
  });
  test('only header w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject
      })
    ).toBe(`${type}(${scope}): ${subject}`);
  });
  test('header and body w/ out scope', () => {
    expect(
      commitMessage({
        type,
        subject,
        body
      })
    ).toBe(`${type}: ${subject}\n\n${body}`);
  });
  test('header and body w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${body}`);
  });
  test('header and body w/ uppercase scope', () => {
    const upperCaseScope = scope.toLocaleUpperCase();
    expect(
      commitMessage(
        {
          type,
          scope: upperCaseScope,
          subject,
          body
        },
        {
          ...defaultOptions,
          disableScopeLowerCase: true
        }
      )
    ).toBe(`${type}(${upperCaseScope}): ${subject}\n\n${body}`);
  });
  test('header, body and issues w/ out scope', () => {
    expect(
      commitMessage({
        type,
        subject,
        body,
        issues
      })
    ).toBe(`${type}: ${subject}\n\n${body}\n\n${issues}`);
  });
  test('header, body and issues w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body,
        issues
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${body}\n\n${issues}`);
  });
  test('header, body and long issues w/ out scope', () => {
    expect(
      commitMessage({
        type,
        subject,
        body,
        issues: longIssues
      })
    ).toBe(`${type}: ${subject}\n\n${body}\n\n${longIssuesSplit}`);
  });
  test('header, body and long issues w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body,
        issues: longIssues
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${body}\n\n${longIssuesSplit}`);
  });
  test('header and long body w/ out scope', () => {
    expect(
      commitMessage({
        type,
        subject,
        body: longBody
      })
    ).toBe(`${type}: ${subject}\n\n${longBodySplit}`);
  });
  test('header and long body w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body: longBody
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${longBodySplit}`);
  });
  test('header, long body and issues w/ out scope', () => {
    expect(
      commitMessage({
        type,
        subject,
        body: longBody,
        issues
      })
    ).toBe(`${type}: ${subject}\n\n${longBodySplit}\n\n${issues}`);
  });
  test('header, long body and issues w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body: longBody,
        issues
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${longBodySplit}\n\n${issues}`);
  });
  test('header, long body and long issues w/ out scope', () => {
    expect(
      commitMessage({
        type,
        subject,
        body: longBody,
        issues: longIssues
      })
    ).toBe(`${type}: ${subject}\n\n${longBodySplit}\n\n${longIssuesSplit}`);
  });
  test('header, long body and long issues w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body: longBody,
        issues: longIssues
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${longBodySplit}\n\n${longIssuesSplit}`);
  });
  test('header, long body, breaking change, and long issues w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body: longBody,
        breaking,
        issues: longIssues
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${longBodySplit}\n\n${breakingChange}${breaking}\n\n${longIssuesSplit}`);
  });
  test('header, long body, breaking change (with prefix entered), and long issues w/ scope', () => {
    expect(
      commitMessage({
        type,
        scope,
        subject,
        body: longBody,
        breaking: `${breakingChange}${breaking}`,
        issues: longIssues
      })
    ).toBe(`${type}(${scope}): ${subject}\n\n${longBodySplit}\n\n${breakingChange}${breaking}\n\n${longIssuesSplit}`);
  });
});

describe('validation', () => {
  test('subject exceeds max length', () => {
    expect(() =>
      commitMessage({
        type,
        scope,
        subject: longBody
      })
    ).toThrowError(
      `length must be less than or equal to ${`${defaultOptions.maxLineWidth - type.length - scope.length - 4}`}`
    );
  });
  test('empty subject', () => {
    expect(() =>
      commitMessage({
        type,
        scope,
        subject: ''
      })
    ).toThrowError('subject is required');
  });
});

describe('defaults', () => {
  test('defaultType default', () => {
    expect(questionDefault('type')).toBeUndefined();
  });
  test('defaultType options', () => {
    expect(questionDefault('type', customOptions({ defaultType: type }))).toBe(type);
  });
  test('defaultScope default', () => {
    expect(questionDefault('scope')).toBeUndefined();
  });
  test('defaultScope options', () =>
    expect(questionDefault('scope', customOptions({ defaultScope: scope }))).toBe(scope));

  test('defaultSubject default', () => expect(questionDefault('subject')).toBeUndefined());
  test('defaultSubject options', () => {
    expect(
      questionDefault(
        'subject',
        customOptions({
          defaultSubject: subject
        })
      )
    ).toBe(subject);
  });
  test('defaultBody default', () => {
    expect(questionDefault('body')).toBeUndefined();
  });
  test('defaultBody options', () => {
    expect(questionDefault('body', customOptions({ defaultBody: body }))).toBe(body);
  });
  test('defaultIssues default', () => {
    expect(questionDefault('issues')).toBeUndefined();
  });
  test('defaultIssues options', () => {
    expect(
      questionDefault(
        'issues',
        customOptions({
          defaultIssues: issues
        })
      )
    ).toBe(issues);
  });
  test('disableScopeLowerCase default', () => {
    expect(questionDefault('disableScopeLowerCase')).toBeUndefined();
  });
});

describe('prompts', () => {
  test('commit subject prompt for commit w/ out scope', () => {
    expect(oneLine(questionPrompt('subject', { type }))).toBe(
      'Write a short, imperative tense description of the change (max 94 chars):'
    );
  });
  test('commit subject prompt for commit w/ scope', () => {
    expect(oneLine(questionPrompt('subject', { type, scope }))).toBe(
      'Write a short, imperative tense description of the change (max 82 chars):'
    );
  });
});

describe('transformation', () => {
  test('subject w/ character count', () =>
    expect(
      questionTransformation('subject', {
        type,
        subject
      })
    ).toBe(chalk.green(`(${subject.length}) ${subject}`)));
  test('long subject w/ character count', () =>
    expect(
      questionTransformation('subject', {
        type,
        subject: longBody
      })
    ).toBe(chalk.red(`(${longBody.length}) ${longBody}`)));
});

describe('filter', () => {
  test('lowercase scope', () => expect(questionFilter('scope', 'HelloMatt')).toBe('hellomatt'));
  test('lowerfirst subject trimmed and trailing dots striped', () =>
    expect(questionFilter('subject', '  A subject...  ')).toBe('a subject'));
});

describe('when', () => {
  test('breaking by default', () => expect(questionWhen('breaking', {})).toBeUndefined());
  test('breaking when isBreaking', () =>
    expect(
      questionWhen('breaking', {
        isBreaking: true
      })
    ).toBe(true));
  test('issues by default', () => expect(questionWhen('issues', {})).toBeUndefined());
  test('issues when isIssueAffected', () =>
    expect(
      questionWhen('issues', {
        isIssueAffected: true
      })
    ).toBe(true));
});
