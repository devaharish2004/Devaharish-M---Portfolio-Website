import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id = "skills" className='flex flex-column bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-slate-100 '>
      <div className='title text-md lg:text-2xl font-semibold'>
        MY SKILLS
      </div>
    <div className='Grid grid grid-cols-2 lg:grid-cols-3 gap-4 ml-20 lg:pl-32 mt-12 lg:mt-20 mb-40 lg:mb-60 lg:text-lg mr-20 text-semibold'>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"/>
        </div>
        <div>Python</div>
        </div>
       
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"></img>
        </div>
        <div>C++</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"/>
        </div>
        <div>C language</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
        </div>
        <div>Competitive Programming</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/>
        </div>
        <div>HTML</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"/>
        </div>
        <div>CSS</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"/>
        </div>
        <div>Javascript</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'></img>
        </div>
        <div>Bootstrap CSS</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"/>
        </div>
        <div>Tailwind CSS</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
        </div>
        <div>React.js</div>
        </div>

        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/>
        </div>
        <div>Node.js</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/>
        </div>
        <div>Express.js</div>
        </div>
        
        <div className='grid_items hover:bg-slate-500 flex w-48 lg:w-72 items-center gap-4 justify-center'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/MySQL_Dolphin.jpg?20230224014211"/>
        </div>
        <div>MySQL</div>
        </div>

      </div>
    </div>
  )
}

export default Skills