import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero font-semibold'>
      <div className="text1 text-slate-100  p-4 text-md lg:text-xl">
        <h1>HELLO !</h1>
      </div>
      <div className="text2 text-slate-100 p-4 text-md lg:text-xl ml-16 flex">
        <h1 className='section'>I AM </h1>
        <section className='animation'>
          <div className='first'><div>DEVAHARISH M</div></div>
          <div className='second'><div>A FULL STACK DEVELOPER</div></div>
          <div className='third'><div>AN ASPIRING SDE</div></div>

        </section>
      </div>
      <div className="scroll">
        <a href = "#about"><button class = "rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110">See More</button></a>
        <h1 class = "text-slate-100 text-md lg:text-xl">Click the button to know more about me</h1>
      </div>
    </div>
  )
}

export default Hero