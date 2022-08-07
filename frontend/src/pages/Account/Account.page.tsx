import React, { useState } from "react";
import Login from "../../components/Login/Login.component";
import "./Account.scss";

let background: string =
  "https://nofilmschool.com/sites/default/files/styles/facebook/public/no-time-to-die-characters.jpeg?itok=XGwl7JpO";

const AccountPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="AccountPage">
      <Login />
    </div>
  );
};
export default AccountPage;
