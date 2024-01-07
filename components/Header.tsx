"use client"

import React from 'react'
import {SocialIcon} from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa';


type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky snap-start top-0 flex items-start p-5 justify-between mx-auto max-w-7xl z-20 xl:items-center'>
        <motion.div 
         initial={{
            x:-500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x:0,
            opacity: 1,
            scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        
        className='flex flex-row items-center'>
           
            <SocialIcon url="https://www.linkedin.com/in/rivu-naskar/" 
            fgColor="gray" 
            bgColor="transparent"/>
       
            <SocialIcon url="https://github.com/rivuff" 
            fgColor="gray" 
            bgColor="transparent"/>

            <SocialIcon url="https://leetcode.com/codeBlo0ded/" 
            fgColor="gray" 
            bgColor="transparent"/>

            <SocialIcon url="https://twitter.com/rivu_naskar" 
            fgColor="gray" 
            bgColor="transparent"/>

            
        </motion.div>

        
        <motion.div
          
          initial={{
              x:500,
              opacity: 0,
              scale: 0.5
          }}
          animate={{
              x:0,
              opacity: 1,
              scale: 1
          }}
          transition={{
            duration: 1.5,
          }}
         className='flex flex-row items-center text-gray-300 cursor-pointer'>

        <a
          href='https://drive.google.com/file/d/1JGlwB-949-IsO6Q-Gc-xVK-QsQV5g_Nt/view?usp=sharing' // Provide the path to your CV file
          download='Rivu_Naskar_CV.pdf' // Specify the desired filename for the downloaded file
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col  items-center mx-6 cursor-pointer'
        >
          <FaDownload className='text-gray-400' />
          <p className='text-gray-400 text-sm ml-2'>Download CV</p>
        </a>
          
           <SocialIcon
            network="email"
            fgColor="gray" 
            bgColor="transparent"
            url='#contact'
            />
            <Link href='#contact'>
            <p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>Get in Touch</p>
            </Link>
        </motion.div>
    </header>
  )
}