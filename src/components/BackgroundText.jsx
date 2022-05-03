import React from 'react'
import Typed from 'react-typed';

function BackgroundText() {
  return (
    <div className=' text-gray-800 font-light	 text-2xl md:text-7xl z-50 pt-80 text-center'>
        <div className=' inline-block'>
          
            <h2>Doğukan Çaltekin</h2>
            
            <div className='mt-8'>
                <Typed
                strings={["Selamlar", "İlk React Deneyimlerim"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                />
            </div>
            <button className="mt-8 text-pink-700 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
          >
              Profilimi İncele
            </button>
          </div>
        </div>
  )
}

export default BackgroundText;
