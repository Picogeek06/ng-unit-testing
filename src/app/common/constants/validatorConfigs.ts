
// *USERNAME CONFIGS
export const usernameConfigs = {
  maxLength: 50,
  minLength: 3,
  pattern: /(?=^[a-zA-Z])(?=^[\w\s-.]+$)/,
  errorMessages: {
    required: 'Username is required',
    pattern: 'Username should start with a letter and can contain only letters, numbers, hyphens and underscores',
    maxLength: 'Username should not be more than 50 characters',
    minLength: 'Username should be at least 3 characters'
  }
}