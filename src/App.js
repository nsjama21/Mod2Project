// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home';
import TVShows from './components/TVShows';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tvshows" element={<Dashboard />} />
        <Route path="/tvshows/:title" element={<TVShows />} />
      </Routes>
    </div>
  );
}

export default App;
