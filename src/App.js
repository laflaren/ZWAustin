import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Resources from './components/Resources';
import Sales from './components/Sales'; 
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
const tools = [
  <a href="https://www.austintexas.gov/dropoff"> Austin Resource Recovery Center </a>,
  <a href="https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home"> Easy Compost Guide </a>,
  <a href="">Another one</a>
];
const toolObjects = tools.map((tool, i) => ({id: i, title: tool}))
console.log(toolObjects)

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Austin ZW Consultants
        </h2>
        <Router> 
          <Nav /> 
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resources" component={Resources} />
          </Routes>
        </Router>
      </header>

      <Resources tools={tools} />

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
const Home = () => (
  <div> 
    <h1> Home </h1>  
  </div>
)
export default App;
