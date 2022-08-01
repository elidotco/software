import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
const App = () => {
  return (
    <main>
      <Router>
        <Sidebar />
      </Router>
    </main>
  );
};

export default App;
