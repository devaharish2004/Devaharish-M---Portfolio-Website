import React from 'react'
import './About.css';

const About = () => {

  return (
    <div id = "about">
      <div className='title text-md lg:text-2xl font-semibold '>
          ABOUT ME
      </div>
      <div className='container text-md mt-16 pl-8 pr-8 lg:p-4 lg:text-xl lg:pl-48 lg:pr-48 lg:mt-24'>
 Hi there! This is <span className='font-bold'>Devaharish M</span>, a passionate full stack developer currently pursuing second year in Electronics and Communication Engineering at <a className = "font-bold" href="https://www.citchennai.edu.in/">Chennai Institute of Technology</a>. As a full stack developer, I love being involved in both the front-end and back-end aspects of web development. I am always eager to learn new technologies and programming techniques to improve my skills and stay up-to-date with industry trends.

In addition to my technical skills, I am also a quick learner and enjoy solving complex problems. Currently, I am improving myself in Data Structures and Algorithms as well as Web Development. I love doing Competitive Programming, where I develop my problem solving skills and learn from my failures. I am currently working on several personal projects to further develop my skills and gain more experience. In my free time, I enjoy attending tech meetups and hackathons to network with other developers and learn from their experiences.

My goal as a full stack developer is to build high-quality, user-friendly web applications that solve real-world problems.
      </div>
    </div>

  )
}

export default About