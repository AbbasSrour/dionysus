import { Route, Routes } from 'react-router-dom';
import './app.module.scss';
import Navbar from './components/navbar/navbar.component';
import AccountPage from './pages/account/account.page';
import HomePage from './pages/home/home.page';
import ShowsPage from './pages/shows/shows.page';
import TitlePage from './pages/title/title.page';

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/account'} element={<AccountPage />} />
        <Route path={'/movies'} element={<ShowsPage  key={window.location.pathname}/>}/>
        <Route path={'/series'} element={<ShowsPage key={window.location.pathname}/>} />
        <Route path={'/show/:id'} element={<TitlePage />} />
        {/*<Route path="/search" element={<SearchPage />} />*/}
      </Routes>
    </div>
  );
}

export default App;
