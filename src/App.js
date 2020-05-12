import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
import Home from "../src/pages/Home";
import Main from "../src/pages/Main";
import Document from "../src/pages/Document";
import Review from "../src/pages/Review";
import Contact from "../src/pages/Contact";




function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/document" component={Document}/>
      <Route exact path="/review" component={Review}/>
      <Route exact path="/contact" component={Contact}/>
    </Router>
  );
}

export default App;
