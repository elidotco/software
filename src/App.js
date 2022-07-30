import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';

const App = () => {
  return (
    <main>
      <Router>
        <Login />
      </Router>
    </main>
  );
};

export default App;
