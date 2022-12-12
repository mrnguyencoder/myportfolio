import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home  from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact  from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="max-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/about" element={<About />} />
          <Route path= "/projects" element={<Projects />} />
          <Route path= "/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
