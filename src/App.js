
import './App.css';
import { lazy } from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';
import "./styles/index.css"
import NavigationBar from './components/common/nav';
import HistoryPage from './components/history';
import { Container } from './components/common/container';
import AboutPage from './components/about';
const Home = lazy(() => import('./components/home'));

function Layout() {
  return (
    <Container>

      <NavigationBar />
      <div className="px-4 lg:px-8 xl:px-16">

      <Outlet />
  </div>
    
    </Container>
  );
}

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
