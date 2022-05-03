import React from 'react'

function Navbar(props) {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between px-2 py-3 bg-violet-500 sticky top-0 z-50">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="index">
          {props.logo}
        </a>
        
      </div>
      <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#projects">
                Projeler
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#prices">
                Fiyatlar
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#profile">
                İletişim
              </a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;