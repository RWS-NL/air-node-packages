/** Validates whether the current environment is either development or test */
export const isDevEnv = process.env.NODE_ENV === 'development' ? true : process.env.NODE_ENV === 'test';
