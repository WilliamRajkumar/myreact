import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ViewScreen from './ViewScreen';
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <ViewScreen>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ViewScreen>
        </div>
      </div>
    </Router>
  );
}


export default App;
