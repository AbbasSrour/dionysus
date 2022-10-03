import { Route, Routes } from 'react-router-dom';
import './app.module.scss';
import Navbar from './components/navbar/navbar.component';
import AccountPage from './pages/account/account.page';
import HomePage from './pages/home/home.page';

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/account'} element={<AccountPage />} />
        {/*<Route path={'/show/:type/:id'} element={<ShowPage />} />*/}
        {/*<Route path="/search" element={<SearchPage />} />*/}
      </Routes>
    </div>
  );
}

export default App;
