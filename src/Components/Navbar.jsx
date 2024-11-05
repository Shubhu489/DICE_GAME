import React from 'react'
const Navbar = () => {
  return (<>
  <nav className='nav'>

    <div className='div-logo'>
    <img src="./images/logo.jpg" alt="logo" />
    </div>
    <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Login</li>
        <li href="#">Contact</li>
    </ul>
    <button id='btn'>Sign up</button>
  </nav>
  
  </>
    
  )
}

export default Navbar
