import React from 'react'
function Navbar() {
  return (
    <div>
        <nav>
        <div className="logo">
          <img src="./images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className='login-btn'>Login</button>
        
      </nav>
    </div>
  )
}

export default Navbar
