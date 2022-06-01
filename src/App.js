import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Resources from './components/Resources';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes } from 'react-router-dom'; 
import React from 'react';


function App(props) {
  return (
    <div className="App">
        <BrowserRouter> 

          <Header /> 

          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </BrowserRouter>



      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
export default App;
