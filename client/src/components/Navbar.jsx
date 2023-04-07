import React from 'react'
import './Navbar.css'

const Navbar = () => {


  return (
    <nav className="navigation_bar text-slate-100 p-4 flex flex-row justify-between items-center bg-slate-950 hover:bg-slate-900">
      <div className='name lg:text-lg text-light'>
        <h1>DEVAHARISH M <br/><br/> - AN ASPIRING FULL STACK DEVELOPER</h1>
      </div>

      <div className="links hidden lg:flex-row lg:gap-16  lg:flex lg:flex-row text-md">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#achievements">Achievements</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
      
      {/* offcanvas */}
      <div className="lg:hidden">
      <button class="btn btn-primary bg-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Menu</button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel"></h5>
      <button type="btn-close" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="links-oc offcanvas-body text-primary flex flex-col text-xl">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#achievements">Achievements</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
      </div>
      </div>

  </nav>
  )
}

export default Navbar