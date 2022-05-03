import React from 'react'
import BackgroundImage from './BackgroundImage';
import BackgroundText from './BackgroundText';
import HeaderDown from './HeaderDown';





function Header() {
   
  return (
    <div className="">
              
        <BackgroundImage />
  
        <BackgroundText />
        
        
        <div className='pt-48'>
            <HeaderDown />
        </div>
    </div>
  )
}


export default Header;