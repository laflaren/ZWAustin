import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resources from './components/Resources';
import Footer from './components/Footer';
import {BrowserRouter, Router, Route, Routes } from 'react-router-dom'; 
import React from 'react';


function App(props) {
  return (
    <div className="App">

        <BrowserRouter> 
        <Header /> 

          <Routes>
            <Route path=" /" component={<Home /> } exact />
            <Route path="/about" component={<About /> } />
            <Route path="/resources" component={<Resources /> } />
          </Routes>
        </BrowserRouter>

      <Resources />

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
const Home = () => (
    <div className="App">
        <Router> 
          <Header /> 
          <Routes>
            <Route path=" /" exact element={<Home /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/resources" element={<Resources /> } />
          </Routes>
        </Router>


  </div>
)
export default App;
