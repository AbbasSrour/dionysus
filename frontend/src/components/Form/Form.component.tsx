import React, { useState } from "react";
import Input from "../Input/Input.component";
import { motion } from "framer-motion";
import "./Form.scss";
import CheckBox from "../CheckBox/CheckBox.component";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import {
  loginForm,
  LoginSchema,
  registerForm,
  RegisterSchema,
} from "../../schemas/auth.schema";
import ky from "ky";

const Form: React.FC = () => {
  const [register, setRegister] = useState(true);
  const loginOnSubmitHandler = async (
    values: FormikValues,
    actions: FormikHelpers<loginForm>
  ) => {
    try {
      const { email, password } = values;

      const response = await ky.post(
        `http://localhost:4000/api/v1/auth/login`,
        {
          json: {
            email,
            password,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    actions.resetForm();
  };
  const registerOnSubmitHandler = async (
    values: FormikValues,
    actions: FormikHelpers<registerForm>
  ) => {
    try {
      const response = await ky.post(
        `http://localhost:4000/api/v1/auth/register`,
        {
          json: {
            email: values.email,
            passowrd: values.password,
            userName: values.userName,
            confirmPassword: values.confirmPassword,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    actions.resetForm();
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: loginOnSubmitHandler,
  });
  const registerFormik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: registerOnSubmitHandler,
  });

  return (
    <motion.div className="Form" layout={true}>
      <div className={"Form__links"}>
        <button
          style={!register ? { color: "white" } : { color: "grey" }}
          onClick={() => {
            setRegister(false);
          }}
        >
          Login
        </button>
        <div className={"separator"} />
        <button
          style={register ? { color: "white" } : { color: "grey" }}
          onClick={() => {
            setRegister(true);
          }}
        >
          Register
        </button>
      </div>
      <form
        onSubmit={
          register ? registerFormik.handleSubmit : loginFormik.handleSubmit
        }
      >
        {!register ? (
          <>
            <Input
              type="text"
              nameID="email"
              label="Email"
              value={loginFormik.values.email}
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              valid={!loginFormik.errors.email || !loginFormik.touched.email}
              error={
                !loginFormik.errors.email || !loginFormik.touched.email
                  ? null
                  : loginFormik.errors.email
              }
            />
            <Input
              type="text"
              nameID="password"
              label="Password"
              value={loginFormik.values.password}
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              valid={
                !loginFormik.errors.password || !loginFormik.touched.password
              }
              error={
                !loginFormik.errors.password || !loginFormik.touched.password
                  ? null
                  : loginFormik.errors.password
              }
            />
            <CheckBox boxId={"TermsAndConditions"} />
          </>
        ) : (
          <>
            <Input
              type="text"
              nameID="userName"
              label="Username"
              value={registerFormik.values.userName}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              valid={
                !registerFormik.errors.userName ||
                !registerFormik.touched.userName
              }
              error={
                !registerFormik.errors.userName ||
                !registerFormik.touched.userName
                  ? null
                  : registerFormik.errors.userName
              }
            />
            <Input
              type="text"
              nameID="email"
              label="Email"
              value={registerFormik.values.email}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              valid={
                !registerFormik.errors.email || !registerFormik.touched.email
              }
              error={
                !registerFormik.errors.email || !registerFormik.touched.email
                  ? null
                  : registerFormik.errors.email
              }
            />
            <Input
              type="text"
              nameID="password"
              label="Password"
              value={registerFormik.values.password}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              valid={
                !registerFormik.errors.password ||
                !registerFormik.touched.password
              }
              error={
                !registerFormik.errors.password ||
                !registerFormik.touched.password
                  ? null
                  : registerFormik.errors.password
              }
            />
            <Input
              type="text"
              nameID="confirmPassword"
              label="Verify Password"
              value={registerFormik.values.confirmPassword}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              valid={
                !registerFormik.errors.confirmPassword ||
                !registerFormik.touched.confirmPassword
              }
              error={
                !registerFormik.errors.confirmPassword ||
                !registerFormik.touched.confirmPassword
                  ? null
                  : registerFormik.errors.confirmPassword
              }
            />
            <a>Forget Password?</a>
          </>
        )}
        <button className="Form__button" type={"submit"}>
          {register ? "Register" : "Login"}
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
