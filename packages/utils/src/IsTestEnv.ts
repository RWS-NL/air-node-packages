/** Validates whether the current environment is test */
export const isTestEnv = process.env.NODE_ENV === 'test';

export default isTestEnv;
