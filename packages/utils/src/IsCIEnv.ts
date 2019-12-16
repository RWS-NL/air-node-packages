/** Validates whether the current environment is a CI environment */
export const isCIEnv = Boolean(process.env.CI);

export default isCIEnv;