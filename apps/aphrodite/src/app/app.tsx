// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountPage from './pages/Account/Account.page';
import ShowPage from './pages/Show/Show.page';
import Navbar from './components/Navbar/Navbar.component';
import SearchPage from './pages/Search/Search.page';
import HomePage from './pages/Home/Home.page';
import './app.module.scss';

export function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/account'} element={<AccountPage />} />
          <Route path={'/show/:type/:id'} element={<ShowPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
