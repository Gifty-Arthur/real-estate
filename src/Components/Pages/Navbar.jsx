import React from 'react';
import logo from '../../assets/Images/logo.png'

const Navbar = () => {
  return(
    <nav>
      <div className='h-screen'>
        <div>
           <a href="/" className='text-2xl font-semibold 
           flex items-start justify-between h-screen'> <img src={logo} alt=""/><span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            JustHome</span></a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;

