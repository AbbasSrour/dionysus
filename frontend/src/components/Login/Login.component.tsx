import React, { useState } from "react";
import Input from "../Input/Input.component";
import { motion } from "framer-motion";
import "./Login.scss";
import CheckBox from "../CheckBox/CheckBox.component";

const Login: React.FC = () => {
  const [register, setRegister] = useState(true);

  const emailHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): boolean => {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
    return emailRegex.test(event.target.value);
  };

  return (
    <motion.div className="Login" layout={true}>
      <div className={"Login__links"}>
        <button
          style={!register ? { color: "white" } : { color: "grey" }}
          onClick={() => setRegister(false)}
        >
          Login
        </button>
        <div className={"separator"} />
        <button
          style={register ? { color: "white" } : { color: "grey" }}
          onClick={() => setRegister(true)}
        >
          Register
        </button>
      </div>
      <form>
        {!register ? null : (
          <Input type="text" nameID="username" label="Username" />
        )}
        <Input
          type="text"
          nameID="email"
          label="Email"
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
          OnChange={emailHandler}
        />
        <Input type="text" nameID="password" label="Password" />
        {!register ? null : (
          <Input type="text" nameID="verify-password" label="Verify Password" />
        )}
        {!register ? (
          <a>Forget Password?</a>
        ) : (
          <CheckBox boxId={"TermsAndConditions"} />
        )}
        <button className="Login__button">Login</button>
      </form>
    </motion.div>
  );
};

export default Login;
