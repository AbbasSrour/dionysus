import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import AccountPage from "./pages/Account/Account.page";
import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;