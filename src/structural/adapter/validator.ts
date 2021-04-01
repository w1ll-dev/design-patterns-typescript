// THIS WAY THE LIB VALIDATOR IS REQUIRED TO FUNCTION WORKS

// import isEmail from 'validator/lib/isEmail';

// const email = 'w1llmarcio.dev@hotmail.com';

// if (isEmail(email)) {
//   console.log('is a valid email');
// } else {
//   console.log('is a valid email');
// }

import { EmailValidatorAdapter } from './email-validator/email-validator-adapter';

const emailValidatorAdapter = new EmailValidatorAdapter();
const email = 'w1llmarcio.dev@hotmail.com';
if (emailValidatorAdapter.isEmail(email)) {
  console.log('VALID EMAIL');
} else {
  console.log('INVALID EMAIL');
}
