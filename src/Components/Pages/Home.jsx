import React from 'react';
import background from '../../assets/Images/background.png'
const  Home= () => {
  return (
    
      <div className='bg-cover bg-center min-h-screen w-[100vw] h-[100vh] flex flex-col items-center justify-center
      'style={{ backgroundImage: `url(${background})`, }} > 
   <div>
   <button className=" w-30 h- 42.5 text-white-700 
          hover:text-white border border-white 
          
          hover:bg-white
          focus:outline-none 
          focus:ring-white
           font-medium rounded-full 
           text-sm px-5 py-2 
           text-center me-2 mb-2 
           font-roboto
           dark:border-white border-1
           dark:text-white dark:hover:text-white
            dark:hover:bg-customColor dark:focus:ring-white">
            LET US GUIDE YOUR HOME</button>

            
   </div>

    <div className='text-white text-4xl font-medium font-roboto '>
      <h1>Discover a place you'll
      
        
      </h1>
      <h1 className='mx-20'>love to live</h1>
    

    </div>
    <h1 className='mr-10 text-white text-sm'>sale</h1>


      
        
      </div>

    
  )
}

export default Home
