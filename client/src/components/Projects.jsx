import React from 'react'
import './Projects.css';

const Projects = () => {
  return (
    <div id = "projects" className='flex flex-column bg-gradient-to-r from-violet-900 via-pink-700 to-violet-900 text-slate-100'>
      <div className='title text-md lg:text-2xl font-semibold'>
        MY PROJECTS
      </div>
      <div className='flex flex-column mt-12 gap-4 text-md lg:text-xl ml-8 mr-8 lg:ml-20 lg:mr-20'>
            <div>
              <h1>KFC WEBSITE CLONE USING HTML AND TAILWIND CSS</h1>
              <div className='btn mt-4'>
                <a href = "https://github.com/devaharish2004/KFC-Website-Clone" target={"_blank"}><button className='rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110'>View this Project</button></a>
              </div>
            </div>
            <div>
              <h1>EMPLOYEE MANAGEMENT SYSTEM - FULL STACK WEB APPLICATION USING REACT, EXPRESS AND MYSQL</h1>
              <div className='btn mt-4'>
                <a href = "#"><button className='rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110'>View this Project</button></a>
              </div>
            </div>
            <div>
              <h1>DEVAHARISH M - PORTFOLIO WEBSITE USING REACT</h1>
              <div className='btn mt-4'>
                <a href = "#"><button className='rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110'>View this Project</button></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects