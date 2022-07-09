import React from "react";
import { FlexContainer, HeroContainer, InputContainer, Header, StyledGoogleLogin, OrText, Form, Input, FormFooter, SubmitButton, Switch } 
from "../components/AccountModules.jsx"


export const SignInPage = (props) => {
  return (
    <FlexContainer>
      <HeroContainer></HeroContainer>
      <InputContainer>
        <Header>
          <h1>Sign in to Dionysus</h1>
          <p>Unlimited movies and tv shows.</p>
        </Header>
        <StyledGoogleLogin />
        <OrText>
          <div className="line" />
          <span>or Sign in with Email</span>
          <div className="line" />
        </OrText>
        <Form>
          <Input type="text" name="Email" label="Email" />
          <Input type="text" name="Password" label="Password" />
          <FormFooter>
            <input type="checkbox" id="RemeberMe" name="RemeberMe" />
            <label for="RemeberMe">Remeber Me</label>
            <a href="#">Forget password?</a>
          </FormFooter>
          <SubmitButton type="submit" value="Sign In" />
        </Form>
        <Switch>
          <p>
            Not registered yet?<a href="SignUp"> Create an account</a>
          </p>
        </Switch>
      </InputContainer>
    </FlexContainer>
  );
};

export const SignUpPage = (props) => {
  return (
    <FlexContainer>
      <HeroContainer></HeroContainer>
      <InputContainer>
        <Header>
          <h1>Sign up to Dionysus</h1>
          <p>Unlimited movies and tv shows.</p>
        </Header>
        <StyledGoogleLogin />
        <OrText>
          <div className="line" />
          <span>or Sign up with Email</span>
          <div className="line" />
        </OrText>
        <Form>
          <Input type="text" name="Name" label="Full Name" />
          <Input type="text" name="Email" label="Email" />
          <Input type="text" name="Password" label="Password" />
          <FormFooter>
            <input
              type="checkbox"
              id="Terms&Conditions"
              name="Terms&Conditions"
            />
            <label for="Terms&Conditions">
              I agree to the <a href="#">Terms&Conditions</a>
            </label>
          </FormFooter>
          <SubmitButton type="submit" value="Sign In" />
        </Form>
        <Switch>
          <p>
            Already registered?<a href="SignIn"> Sign in</a>
          </p>
        </Switch>
      </InputContainer>
    </FlexContainer>
  );
};
