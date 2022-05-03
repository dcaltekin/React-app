import React from 'react'
import image from "./images/balloon.jpg"

function BackgroundImage() {
  return (
    <div
        className="absolute -z-10 h-screen w-full bg-fixed bg-cover opacity-50"
        style={{
          backgroundImage: 'url('+image+')',
        }}
      >
          
      </div>
  )
}
export default BackgroundImage;