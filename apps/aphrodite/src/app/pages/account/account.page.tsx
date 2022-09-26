import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { UserApi } from '../../api/user.api';

const AccountPage = () => {
  // if the response of login or register is an error
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [register, setRegister] = useState(false);

  const authApi = new AuthApi();
  const userApi = new UserApi();
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const res = await userApi.getCurrentUser().catch((error) => null);
      // if (res && (await res.json()).userId) setLoggedIn(true);
    };
    check();
    console.log(loggedIn);

    if (loggedIn) navigate('/');
  }, [loggedIn]);

  const loginOnSubmitHandler = async (
    values: FormikValues,
    actions: FormikHelpers<LoginInput>,
  ) => {
    try {
      setError(null);
      const { email, password } = values;

      const res = await authApi
        .login({ email, password })
        .catch(async (error) => setError((await error.response.json()).message));
      if (res && res.status === 200) {
        navigate('/');
        actions.resetForm();
      }
    } catch (error: any) {
      console.log(error);
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

      const res = await authApi
        .register({
          email,
          password,
          userName,
          confirmPassword,
        })
        .catch((error) => setError(error.response.message));
      if (res && res.status === 201) setRegister(false);

      actions.resetForm();
    } catch (error: any) {
      console.log(error);
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
        <div className={'AccountPage__message'}>
          {error ? <span className={'error'}>{error}</span> : null}
          {message ? <span className={'info'}>{message}</span> : null}
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
                autoComplete={'email'}
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
                autoComplete={'current-password'}
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
                autoComplete={'username'}
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
                autoComplete={'email'}
              />
              <Input
                type="password"
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
                autoComplete={'new-password'}
              />
              <Input
                type="password"
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
                autoComplete={'new-password'}
              />
              <CheckBox boxId={'TermsAndConditions'} />
            </>
          )}
          <button
            className={
              (register && registerFormik.isSubmitting) ||
              (!register && loginFormik.isSubmitting)
                ? 'Form__button submitting'
                : 'Form__button'
            }
            type={'submit'}
            disabled={register ? registerFormik.isSubmitting : loginFormik.isSubmitting}
          >
            {register ? 'Register' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
export default AccountPage;
