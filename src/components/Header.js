import { Link } from 'react-router-dom'; 
import { useState } from "react";

function Header() {

  
  return (
    <div className="header"> 
    <div className='menu'> 
    <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/About'> About </Link>
          </li>
          <li>
            <Link to='/Resources'> Resources </Link>
          </li>
    </ul>
    </div>
      <h1> Zero Waste Austin Consultants </h1>  <br />
  </div>
  );
}

export default Header;