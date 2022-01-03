import { configLoader } from 'commitizen';
import commitTypes from './commit-types';
import engine from './engine';
import commitlintLoad from '@commitlint/load';

const config = configLoader.load();
const options = {
  types: commitTypes.types,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || config.defaultScope,
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  defaultBody: process.env.CZ_BODY || config.defaultBody,
  defaultIssues: process.env.CZ_ISSUES || config.defaultIssues,
  disableScopeLowerCase: process.env.DISABLE_SCOPE_LOWERCASE || config.disableScopeLowerCase,
  maxHeaderWidth:
    (process.env.CZ_MAX_HEADER_WIDTH && parseInt(process.env.CZ_MAX_HEADER_WIDTH)) || config.maxHeaderWidth || 100,
  maxLineWidth: (process.env.CZ_MAX_LINE_WIDTH && parseInt(process.env.CZ_MAX_LINE_WIDTH)) || config.maxLineWidth || 100
};

(function (options) {
  try {
    commitlintLoad().then(function (clConfig: { rules: { [x: string]: any } }) {
      if (clConfig.rules) {
        const maxHeaderLengthRule = clConfig.rules['header-max-length'];
        if (
          typeof maxHeaderLengthRule === 'object' &&
          maxHeaderLengthRule.length >= 3 &&
          !process.env.CZ_MAX_HEADER_WIDTH &&
          !config.maxHeaderWidth
        ) {
          options.maxHeaderWidth = maxHeaderLengthRule[2];
        }
      }
    });
  } catch (err: any) {
    throw new Error(err);
  }
})(options);

export default engine(options);
