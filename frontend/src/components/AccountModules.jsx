import styled, { css } from "styled-components";
import { GoogleLogin } from "react-google-login";
import NoTimeToDie from "../assets/NoTimeToDie.jpg";

export const FlexContainer = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const HeroContainer = styled.div`
  width: 50vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(${NoTimeToDie});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
`;

export const Header = styled.div`
  margin-left: 20%;
  width: 60%;
  margin-bottom: 2rem;
  h1 {
    margin: 0;
    padding: 0;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
    padding: 0;
    color: grey;
  }
`;

export const StyledGoogleLogin = styled(GoogleLogin)`
  width: 60%;
  margin-left: 20%;
  margin-bottom: 1.5rem;
`;

export const OrText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
  width: 70%;
  margin-bottom: 2rem;
  color: grey;
  .line {
    height: 0.1rem;
    width: 25%;
    border-bottom: 0.1rem solid grey;
  }
  span {
    margin: 0 1rem;
  }
`;

export const Form = styled.div`
  margin-left: 20%;
  width: 60%;
  box-sizing: border-box;
`;

export const Input = styled(({ type, nameID, label, ...rest }) => {
  return (
    <fieldset {...rest}>
      <input type={type} name={nameID} id={nameID} required />
      <label for={nameID}>{label}</label>
    </fieldset>
  );
})`
  position: relative;
  width: 93%;
  height: 2.5rem;
  display: flex;
  align-items: flex-end;
  border: 0.12rem solid grey;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  input {
    width: 100%;
    border: 0;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
  label {
    position: absolute;
    top: 1rem;
    font-size: 1rem;
    border: 0;
    outline: none;
    transition-property: top, font-size;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    color: grey;
  }
  /* Animate label */
  input:required:valid + label {
    top: 0;
    font-size: 0.8rem;
    color: blue;
    font-weight: bold;
  }
  input:focus + label {
    top: 0;
    font-size: 0.8rem;
    color: blue;
    font-weight: bold;
  }
  input:hover + label {
    top: 0;
    font-size: 0.8rem;
    color: blue;
    font-weight: bold;
  }
  /* Animate Fieldset */
  &:hover {
    border: 0.12rem solid blue;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  input {
    width: 1rem;
    height: 1rem;
    margin: 0;
    padding: 0;
  }
  label {
    margin-left: 0.2rem;
    font-weight: normal;
  }
  a {
    text-decoration: none;
    margin-right: 0;
    margin-left: auto;
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: blue;
  border: 0;
  color: white;
`;

export const Switch = styled.div`
  width: 60%;
  margin-left: 20%;
  a {
    text-decoration: none;
  }
`;
