
import './App.css';

import { Route, Routes } from 'react-router-dom';
import "./styles/index.css"
import Jokes from './components/jokes';
import Home from './components/home';
import New from './components/new';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/jokes/new" element={<New />} />

      </Routes>
    </div>
  );
}

export default App;
