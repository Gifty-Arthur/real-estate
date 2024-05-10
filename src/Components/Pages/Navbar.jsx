import React from 'react';

import background from "../../assets/Images/background.png";
import logo from '../../assets/Images/logo.png';
import { IoCallOutline} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";



const Navbar = () => {
  
  const navItems =[
    {link: "Home", path: 'home'},
    {link: "Listings", path: 'listings'},
    {link: "Members", path: 'members'},
    {link: "Blog", path: 'blog'},
    {link: "Page", path: 'Pages'},
    {link: "Contact", path: 'contact'}
  ]
  


  return (
    <nav 
     className='min-h-screen bg-cover bg-center md:px-8 p-4 max-w-screen-2xl mx-auto '
     style={{ backgroundImage: `url(${background})`, }}
    >
      <div className='flex items-start justify-between px-4 py-4'>
        
        <div className='flex space-x-20 items-center font-medium'>
          
            <a href="/" text-2xl font-semibold><img src={logo} alt=""
             />
            </a>
            

            <ul className=' md:flex space-x-6 hidden text'>
              
            
              {
                navItems.map(({link, path}) => 
                <a key={link} href={path} className='flex items-center hover:text-blue-300

                 justify-between text-white text-sm '>{link}
                   <IoMdArrowDropdown  className='mr-1'/>
                  

                   
                  
                 </a>)
                 

              }
            </ul>
          
        </div> 

        {/* Add Property  and the contact*/}
        <div className='md:flex space-x-6 items-center'>

        <a href="/" className='text-white mx-px flex items-center'>

    <IoCallOutline className='w-5 h- 5hover:text-customColor' />

    <span class='relative top-[-2px] text-sm'>+6868588666</span>
    <CgProfile className='ml-4 h-10 w-10 hover:text-customColor' />
  </a>
          <button type="button" class=" w-40 h- 42.5 text-white-700 
          hover:text-white border border-white 
          hover:bg-white
          focus:outline-none 
          focus:ring-white
           font-medium rounded-full 
           text-sm px-5 py-2 
           text-center me-2 mb-2 
           dark:border-white border-1
           dark:text-white dark:hover:text-white
            dark:hover:bg-customColor dark:focus:ring-white">
            Add Property</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

