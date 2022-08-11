import { number, object, string, TypeOf } from "zod";

export const RegisterUserSchema = object({
  body: object({
    userName: string({
      required_error: "Username required",
    })
      .min(3, "Username is too short")
      .max(20, "Username is too long"),
    name: string({
      required_error: "First name is required",
    })
      .min(2, "First name is too short")
      .max(20, "Last name is too long"),
    age: number({
      required_error: "Age is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Invalid email address"),
    password: string({
      required_error: "Password is required",
    })
      .min(8, "Password is too short")
      .max(32, "Password is too long"),
    passwordConfirm: string({
      required_error: "Password confirmation is required",
    }),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  }),
});

export type RegisterUserInput = Omit<
  TypeOf<typeof RegisterUserSchema>["body"],
  "passwordConfirm"
>;

export const LoginUserSchema = Object({
  body: object({
    email: string({
      required_error: "Email address is required",
    }).email("Invalid email address"),
    password: string({
      required_error: "Password is required",
    })
      .min(8, "Invalid email or password")
      .max(32, "Invalid email or password"),
  }),
});

export type LoginUserInput = TypeOf<typeof LoginUserSchema>["body"];

export const VerifyEmailSchema = object({
  params: object({
    verificationCode: string(),
  }),
});

export type VerifyEmailInput = TypeOf<typeof VerifyEmailSchema>["params"];
