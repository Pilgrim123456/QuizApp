import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Quiz from './Components/Quiz';
import Wheel from './Components/Wheel';

const App = () => {
  return (
    <Router>
       <nav>
          <ul>
            <li>
              <Link to="/wheel">Wheel Game</Link>
            </li>
            <li>
              <Link to="/other">Quiz</Link>
            </li>
          </ul>
        </nav>
       <div>
       <Routes>
          <Route path="/wheel" element={<Wheel />} />
          <Route path="/other" element={<Quiz />} />
          {/* Optional default route */}
          <Route path="/" element={<Wheel />} />
        </Routes>

    </div>
    </Router>
   
  )
}

export default App;