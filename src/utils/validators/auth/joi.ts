import {
  EMPTY_EMAIL_MESSAGE,
  EMPTY_PASSWORD_MESSAGE,
  INVALID_EMAIL_MESSAGE,
} from '@/constants';
import joi from 'joi';

export const authValidator = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'string.empty':
            err.message = EMPTY_EMAIL_MESSAGE;
            break;
          case 'string.email':
            err.message = INVALID_EMAIL_MESSAGE;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  password: joi
    .string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'string.empty':
            err.message = EMPTY_PASSWORD_MESSAGE;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});
