import * as yup from "yup";

const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

export const RegisterSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  userName: yup.string().min(3).required("Required"),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      passwordRegex,
      "Password must contain at least one lowercase, one uppercase, one number, and one special character."
    )
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      passwordRegex,
      "Password must contain at least one lowercase, one uppercase, one number, and one special character."
    )
    .required("Required"),
});

export interface loginForm {
  email: string;
  password: string;
}

export interface registerForm {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}
