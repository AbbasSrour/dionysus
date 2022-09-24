import * as yup from 'yup';
import { AuthApi } from '../api/auth.api';

//TODO optimize regex
const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
const usernameRegex = /^(?=[a-zA-Z._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

const api = new AuthApi();

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required')
    .test(
      'Unique Email',
      'Email already in use', // <- key, message
      (value) => api.emailExists(value || ''),
    ),

  userName: yup
    .string()
    .min(4)
    .required('Required')
    .matches(usernameRegex, 'No special characters or numbers allowed'),

  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      passwordRegex,
      'Password must contain at least one lowercase, one uppercase, one number, and one special character.',
    )
    .required('Required'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      passwordRegex,
      'Password must contain at least one lowercase, one uppercase, one number, and one special character.',
    )
    .required('Required'),
});

//todo
// export type loginForm = TypeOf<typeof LoginSchema>;
export interface LoginInput {
  email: string;
  password: string;
}

//todo
// export type registerForm = TypeOf<typeof RegisterSchema>;
export interface RegisterInput {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}
