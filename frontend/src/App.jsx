import "./App.css";
import { SignInPage, SignUpPage } from "./pages/AccountPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
