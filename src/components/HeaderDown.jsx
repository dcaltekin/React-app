import React from 'react'
import image1 from "./images/balloon.jpg"
import image2 from "./images/hills.jpg"
import image3 from "./images/eberhard.jpg"

function HeaderDown() {
  return (
    
<div className="bg-white  overflow-hidden lg:flex lg:items-center " id='projects'>
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
            <span className="block">
                Yapılan projelere göz atmak ister misiniz?
            </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
            Projelerimizi React JS yardımı ile geliştiriyoruz. Bunun yanında CSS Framework'ü olan Tailwind'i kullanarak eşsiz bir görüntü sunmayı hedefliyoruz.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                   Göz At
                </button>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src={image1} className="rounded-lg w-7/12 hover:scale-105" alt="Fotoğraf"/>
        <div>
            <img src={image2} className="rounded-lg mb-8 hover:scale-105" alt="Fotoğraf"/>
            <img src={image3} className="rounded-lg hover:scale-105" alt="Fotoğraf"/>
        </div>
    </div>
</div>

  )
}
export default HeaderDown;
