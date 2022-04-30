import '../App.css';
import About from './About';
import Resources from './Resources'
import { Link } from 'react-router-dom'; 


function Nav() {


  return (
    <div> 
    <div className="App">
          <Link to='/home'>
            <a> Home </a>
          </Link>

          <Link to='/about'>
            <a> About </a>
          </Link>

          <Link to='/resources'>
            <a> Resources </a>
          </Link>

          {/* <Link to=''>

          </Link> */}
      </div>
    </div>
  );
}

export default Nav;
