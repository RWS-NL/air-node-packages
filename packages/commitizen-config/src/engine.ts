import chalk from 'chalk';
import map from 'lodash.map';
import longest from 'longest';
import rightPad from 'right-pad';
import wrap from 'word-wrap';

const headerLength = (answers: { type: string | any[]; scope: string | any[] }) =>
  answers.type.length + 2 + (answers.scope ? answers.scope.length + 2 : 0);

const filter = (array: any[]) => array.filter((x: any) => x);

const maxSummaryLength = (options: { maxHeaderWidth?: number }, answers: any) => {
  if (options.maxHeaderWidth) {
    return options.maxHeaderWidth - headerLength(answers);
  }

  return 100;
};

const filterSubject = (subject: string) => {
  subject = subject.trim();
  if (subject.charAt(0).toLowerCase() !== subject.charAt(0)) {
    subject = subject.charAt(0).toLowerCase() + subject.slice(1, subject.length);
  }
  while (subject.endsWith('.')) {
    subject = subject.slice(0, subject.length - 1);
  }
  return subject;
};

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
// eslint-disable-next-line import/no-anonymous-default-export
export default (options: {
  types?: any;
  defaultType?: any;
  defaultScope?: any;
  disableScopeLowerCase?: any;
  defaultSubject?: any;
  defaultBody?: any;
  defaultIssues?: any;
  maxLineWidth?: any;
  maxHeaderWidth?: number;
}) => {
  const types = options.types;

  const length = longest(Object.keys(types)).length + 1;
  const choices = map(types, (type, key) => ({
    name: rightPad(key + ':', length) + ' ' + type.description,
    value: key
  }));

  return {
    // When a user runs `git cz`, prompter will
    // be executed. We pass you cz, which currently
    // is just an instance of inquirer.js. Using
    // this you can ask questions and get answers.
    //
    // The commit callback should be executed when
    // you're ready to send back a commit template
    // to git.
    //
    // By default, we'll de-indent your commit
    // template and will keep empty lines.
    prompter: (cz: any, commit?: any) => {
      // Let's ask some questions of the user
      // so that we can populate our commit
      // template.
      //
      // See inquirer.js docs for specifics.
      // You can also opt to use another input
      // collection library if you prefer.
      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: "Select the type of change that you're committing:",
          choices: choices,
          default: options.defaultType
        },
        {
          type: 'input',
          name: 'scope',
          message: 'What is the scope of this change (e.g. component or file name): (press enter to skip)',
          default: options.defaultScope,
          filter: (value: string) => (options.disableScopeLowerCase ? value.trim() : value.trim().toLowerCase())
        },
        {
          type: 'input',
          name: 'subject',
          message: (answers: any) =>
            'Write a short, imperative tense description of the change (max ' +
            maxSummaryLength(options, answers) +
            ' chars):\n',
          default: options.defaultSubject,
          validate: (subject: string, answers: any) => {
            const filteredSubject = filterSubject(subject);
            return filteredSubject.length === 0
              ? 'subject is required'
              : filteredSubject.length <= maxSummaryLength(options, answers)
              ? true
              : 'Subject length must be less than or equal to ' +
                maxSummaryLength(options, answers) +
                ' characters. Current length is ' +
                filteredSubject.length +
                ' characters.';
          },
          transformer: (subject: string, answers: any) => {
            const filteredSubject = filterSubject(subject);
            const color = filteredSubject.length <= maxSummaryLength(options, answers) ? chalk.green : chalk.red;
            return color('(' + filteredSubject.length + ') ' + subject);
          },
          filter: (subject: string) => filterSubject(subject)
        },
        {
          type: 'input',
          name: 'body',
          message: 'Provide a longer description of the change: (press enter to skip)\n',
          default: options.defaultBody
        },
        {
          type: 'confirm',
          name: 'isBreaking',
          message: 'Are there any breaking changes?',
          default: false
        },
        {
          type: 'input',
          name: 'breakingBody',
          default: '-',
          message:
            'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:\n',
          when: (answers: { isBreaking: any; body: any }) => answers.isBreaking && !answers.body,
          validate: (breakingBody: { trim: () => { (): any; new (): any; length: number } }) =>
            breakingBody.trim().length > 0 || 'Body is required for BREAKING CHANGE'
        },
        {
          type: 'input',
          name: 'breaking',
          message: 'Describe the breaking changes:\n',
          when: (answers: { isBreaking: any }) => answers.isBreaking
        },

        {
          type: 'confirm',
          name: 'isIssueAffected',
          message: 'Does this change affect any open issues?',
          default: options.defaultIssues ? true : false
        },
        {
          type: 'input',
          name: 'issuesBody',
          default: '-',
          message:
            'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself:\n',
          when: (answers: { isIssueAffected: any; body: any; breakingBody: any }) =>
            answers.isIssueAffected && !answers.body && !answers.breakingBody
        },
        {
          type: 'input',
          name: 'issues',
          message: 'Add issue references (e.g. "fix #123", "re #123".):\n',
          when: (answers: { isIssueAffected: any }) => answers.isIssueAffected,
          default: options.defaultIssues ? options.defaultIssues : undefined
        }
      ]).then(
        (answers: { scope: string; type: string; subject: string; body: string; breaking: any; issues: string }) => {
          const wrapOptions = {
            trim: true,
            cut: false,
            newline: '\n',
            indent: '',
            width: options.maxLineWidth
          };

          // parentheses are only needed when a scope is present
          const scope = answers.scope ? '(' + answers.scope + ')' : '';

          // Hard limit this line in the validate
          const head = answers.type + scope + ': ' + answers.subject;

          // Wrap these lines at options.maxLineWidth characters
          const body = answers.body ? wrap(answers.body, wrapOptions) : false;

          // Apply breaking change prefix, removing it if already present
          let breaking = answers.breaking ? answers.breaking.trim() : '';
          breaking = breaking ? 'BREAKING CHANGE: ' + breaking.replace(/^BREAKING CHANGE: /, '') : '';
          breaking = breaking ? wrap(breaking, wrapOptions) : false;

          const issues = answers.issues ? wrap(answers.issues, wrapOptions) : false;

          commit(filter([head, body, breaking, issues]).join('\n\n'));
        }
      );
    }
  };
};
