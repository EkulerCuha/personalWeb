"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const aniNight = {
  closed:{
    x:0,
    rotate:0,
  },
  opened:{
    x:40,
    rotate:360
  }
}

const Navbar = ({setDarkMode, darkMode}) => {

  const nightModeVariants = {
    closed:{
      opacity:1,
    },
    opened:{
      opacity:0,
    }
  }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl`}>
      {/* LOGO */}
      <motion.div className='flex justify-start' initial={{rotate:0}} whileHover={{rotate:10, transition:{duration:0.2}}}>
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
            <span className='text-white mr-1'>Eku</span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
        </Link>
      </motion.div>
      {/* NIGHT MODE */}
      <motion.div className='w-20 h-10 bg-gray-400 dark:bg-sky-900 rounded-full cursor-pointer' onClick={toggleDarkMode}>
        <motion.div className='w-8 h-8 bg-gray-300 dark:bg-sky-300 rounded-full my-1 mx-1 flex justify-center items-center' variants={aniNight} animate={darkMode ? "opened" : "closed"}>
          <svg className="object-contain w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> 
            <motion.path height="24px" width="24px" variants={nightModeVariants} animate={darkMode ? "closed" : "opened"} d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/> 
            <motion.path variants={nightModeVariants} animate={darkMode ? "opened" : "closed"} d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"/> 
            <motion.path variants={nightModeVariants} animate={darkMode ? "closed" : "opened"} d="M12 5V3M12 21v-2"/> 
            <motion.path variants={nightModeVariants} animate={darkMode ? "closed" : "opened"} d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"/> 
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Navbar