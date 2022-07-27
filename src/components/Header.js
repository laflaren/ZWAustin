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
    
    <div className="gooder">
    <h1> Gooder Co</h1>
    </div>

    <div className="subheader">
      <h2> Zero Waste Austin Consultants </h2>  
      </div>
      
  </div>
  );
}

export default Header;