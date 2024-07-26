import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NAV from './components/NAV';
import About from './components/About';
// import Products from './components/Products';
// import Contact from './components/Contact';
// import Policies from './components/Policies';
// import Account from './components/Account';
import './App.css'; // Your global CSS
import Home from './components/Home';

const App = () => {
  return (
    <div>
    <NAV></NAV>
    </div>
  );
}

export default App;
