import React, { useState } from 'react';
import './account.scss';
import { FormikHelpers, FormikValues, useFormik } from 'formik';
import { motion } from 'framer-motion';
import Input from '../../components/input/input.component';
import CheckBox from '../../components/checkbox/checkbox.component';
import {
  LoginInput,
  LoginSchema,
  RegisterInput,
  RegisterSchema,
} from '../../schema/auth.schema';
import { AuthApi } from '../../api/auth.api';
import SlideShow from '../../components/slideshow/slide-show.component';

const AccountPage = () => {
  const [register, setRegister] = useState(false);
  const api = new AuthApi();

  const loginOnSubmitHandler = async (
    values: FormikValues,
    actions: FormikHelpers<LoginInput>,
  ) => {
    try {
      const { email, password } = values;
      await api.login({ email, password });
      actions.resetForm();
    } catch (error: any) {
      console.log(error.response.statusCode);
    }
  };
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: LoginSchema,
    onSubmit: loginOnSubmitHandler,
  });

  const registerOnSubmitHandler = async (
    values: FormikValues,
    actions: FormikHelpers<RegisterInput>,
  ) => {
    try {
      const { email, password, userName, confirmPassword } = values;
      await api.register({ email, password, userName, confirmPassword });
      actions.resetForm();
    } catch (error: any) {
      console.log(error.response.statusCode);
    }
  };
  const registerFormik = useFormik({
    initialValues: {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: RegisterSchema,
    onSubmit: registerOnSubmitHandler,
  });

  return (
    <div className="AccountPage">
      <SlideShow />
      <h1>Dionysus</h1>
      <motion.div className="Form" layout={true}>
        <div className={'Form__links'}>
          <button
            style={!register ? { color: 'white' } : { color: 'grey' }}
            onClick={() => {
              registerFormik.resetForm();
              setRegister(false);
            }}
          >
            Login
          </button>
          <div className={'separator'} />
          <button
            style={register ? { color: 'white' } : { color: 'grey' }}
            onClick={() => {
              loginFormik.resetForm();
              setRegister(true);
            }}
          >
            Register
          </button>
        </div>
        <form
          onSubmit={register ? registerFormik.handleSubmit : loginFormik.handleSubmit}
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
                valid={!loginFormik.errors.password || !loginFormik.touched.password}
                error={
                  !loginFormik.errors.password || !loginFormik.touched.password
                    ? null
                    : loginFormik.errors.password
                }
              />
              <a>Forget Password?</a>
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
                  !registerFormik.errors.userName || !registerFormik.touched.userName
                }
                error={
                  !registerFormik.errors.userName || !registerFormik.touched.userName
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
                valid={!registerFormik.errors.email || !registerFormik.touched.email}
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
                  !registerFormik.errors.password || !registerFormik.touched.password
                }
                error={
                  !registerFormik.errors.password || !registerFormik.touched.password
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
              <CheckBox boxId={'TermsAndConditions'} />
            </>
          )}
          <button className="Form__button" type={'submit'}>
            {register ? 'Register' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
export default AccountPage;
