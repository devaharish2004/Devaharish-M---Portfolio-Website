import React from 'react'
import './Achievements.css'

const Achievements = () => {
  return (
    <div className='flex flex-column bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 text-slate-100' id = "achievements">
        <div className='title text-md lg:text-2xl font-semibold'>
            ACHIEVEMENTS
        </div>
        <div className='flex flex-column mt-12 gap-2 text-md lg:text-xl ml-8 mr-8 lg:ml-20 lg:mr-20'>
            <div>
              <h1>Attended 30+ contests and solved 300+ problems in Codechef - Highest rating 1457 - 2 star</h1>
              <div className='btn mt-4'>
                <a href = "https://www.codechef.com/users/devaharish" target={'_blank'}><button className='rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110'>View Codechef Profile</button></a>
              </div>
            </div>
            <div>
              <h1>Solved 100+ problems in Leetcode</h1>
              <div className='btn mt-4'>
                <a href = "https://leetcode.com/devaharishm/" target={'_blank'}><button className='rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110'>View Leetcode Profile</button></a>
              </div>
            </div>
            <div>
              <h1>Received 5 star Badge(Gold) for Python, 3-star Badges(Silver) for C, C++ and Problem Solving in HackerRank</h1>
              <div className='btn mt-4'>
                <a href = "https://www.hackerrank.com/devaharishm2004" target={'_blank'}><button className='rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110'>View HackerRank Profile</button></a>
              </div>
            </div>
            <div>
              <h1>Solved 1200+ problems and received 400+ bronze medals in SkillRack</h1>
              <div className='btn mt-4'>
                <a href = "http://www.skillrack.com/profile/383996/980cf1ad9bd9992e616bb0b67f2acdd2a2746b70" target={'_blank'}><button className='rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110'>View SkillRack Profile</button></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements