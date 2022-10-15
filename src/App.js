
import './App.css';
import { lazy } from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';
import "./styles/index.css"
import NavigationBar from './components/common/nav';
import HistoryPage from './components/history';
const Home = lazy(() => import('./components/home'));

function Layout() {
  return (
    <div className="mx-auto min-h-screen px-1 sm:px-6 lg:px-8">
      <NavigationBar />
      <Outlet />
  
    </div>
  );
}

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<HistoryPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
