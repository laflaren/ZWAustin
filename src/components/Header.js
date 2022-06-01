import { Link } from 'react-router-dom'; 

function Header() {

  
  return (
    <div className="header"> 
    <ul className='menu'>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/about'> About </Link>
          </li>
          <li>
            <Link to='/resources'> Resources </Link>
          </li> 
    </ul>
      <h1> Zero Waste Austin Consultants </h1>  <br />
  </div>
  );
}

export default Header;