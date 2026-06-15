import React from 'react'
import group_profile from '../assets/group_profile.png'

const  Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      
      <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>

        <img className='w-20' src={group_profile} alt="" />
        <p className='text-xs font-medium'>Trusted by 5K+ people</p>

      </div>


      </div>
  )
}

export default  Hero


