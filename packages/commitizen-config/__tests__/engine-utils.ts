import conventionalCommitTypes from '../src/commit-types';
import engine from '../src/engine';

export const types = conventionalCommitTypes.types;

export const defaultOptions = {
  types,
  maxLineWidth: 100,
  maxHeaderWidth: 100
};

export const commitMessage = (
  answers: { type: string; subject: string; scope?: string; body?: string; issues?: string; breaking?: string },
  options?: {
    disableScopeLowerCase?: any;
    types: any;
    maxLineWidth: any;
    maxHeaderWidth: number;
    defaultType?: any;
    defaultScope?: any;
    defaultSubject?: any;
    defaultBody?: any;
    defaultIssues?: any;
  }
) => {
  options = options || defaultOptions;
  let result = null;
  engine(options).prompter(
    {
      prompt: (questions: any) => {
        return {
          then: (
            finalizer: (arg0: {
              type: string;
              subject: string;
              scope?: string;
              body?: string;
              issues?: string;
              breaking?: string;
            }) => void
          ) => {
            processQuestions(questions, answers);
            finalizer(answers);
          }
        };
      }
    },
    (message: any) => {
      result = message;
    }
  );
  return result;
};

export const processQuestions = (
  questions: { [x: string]: any },
  answers: {
    [x: string]: any;
    type?: string;
    subject?: string;
    scope?: string;
    body?: string;
    issues?: string;
    breaking?: string;
  }
) => {
  for (const i in questions) {
    const question = questions[i];
    const answer = answers[question.name];
    const validation = answer === undefined || !question.validate ? true : question.validate(answer, answers);
    if (validation !== true) {
      throw new Error(validation || `Answer '${answer}' to question '${question.name}' was invalid`);
    }
    if (question.filter && answer) {
      answers[question.name] = question.filter(answer);
    }
  }
};

export const getQuestions = (options) => {
  options = options || defaultOptions;
  let result = null;
  engine(options).prompter({
    prompt: function (questions) {
      result = questions;
      return {
        then: () => undefined
      };
    }
  });
  return result;
};

export const getQuestion = (name: string, options?: any): any => {
  options = options || defaultOptions;
  const questions = getQuestions(options) as any;
  for (const i in questions) {
    if (questions[i].name === name) {
      return questions[i];
    }
  }
  return false;
};

export const questionPrompt = (name: string, answers: any, options?: any) => {
  options = options || defaultOptions;
  const question = getQuestion(name, options);
  return question.message && typeof question.message === 'string' ? question.message : question.message(answers);
};

export const questionTransformation = (name: string, answers: any, options?: any) => {
  options = options || defaultOptions;
  const question = getQuestion(name, options);
  return question.transformer && question.transformer(answers[name], answers, options);
};

export const questionFilter = (name: string, answer: any, options?: any) => {
  options = options || defaultOptions;
  const question = getQuestion(name, options);
  return question.filter && question.filter(typeof answer === 'string' ? answer : answer[name]);
};

export const questionDefault = (name: string, options?: any) => {
  options = options || defaultOptions;
  const question = getQuestion(name, options);
  return question.default;
};

export const questionWhen = (name: string, answers: any, options?: any) => {
  options = options || defaultOptions;
  const question = getQuestion(name, options);
  return question.when(answers);
};

export const customOptions = (options?: any) => {
  Object.keys(defaultOptions).forEach((key) => {
    if (options[key] === undefined) {
      options[key] = defaultOptions[key];
    }
  });
  return options;
};
