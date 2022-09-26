import React, { useState } from 'react';
import Form from '../../components/Form/Form.component';
import './Account.scss';

let background: string =
  'https://nofilmschool.com/sites/default/files/styles/facebook/public/no-time-to-die-characters.jpeg?itok=xgwl7jpo';

const AccountPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="AccountPage">
      <h1>Dionysus</h1>
      <Form />
    </div>
  );
};
export default AccountPage;
