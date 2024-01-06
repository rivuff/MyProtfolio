"use client"
import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

     className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3> 
       
       <motion.img
       initial={{
        x:-200,
        opacity: 0
       }}
       transition={{
        duration:1.2
       }}
       whileInView={{
        x:0,
        opacity:1
       }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] my-16' src="https://github.com/rivuff/jhv/assets/74763144/0698d7de-bdd4-4520-87d4-1c2a8dfe5e9a" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a{" "}<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
            <p className='text-sm my-4'>
             Howdy! 👋 I&apos;m a software developer with a knack for turning code into creative solutions. Currently on the lookout for exciting opportunities, I&apos;ve journeyed through several internships, soaking up experience across different domains. But that&apos;s not all—I&apos;ve got a thing for freelancing too, adding a touch of versatility to my skill set.
            </p>
            <p>
              {
                " "
              }
            </p>
            <p className='text-sm my-4'>
              My passion lies in embracing diverse projects and bringing them to life with my coding wizardry. I thrive on challenges and love staying ahead in the ever-evolving tech world. If you&apos;re curious about my tech adventures, take a stroll through my portfolio—it&apos;s a visual journey of my coding escapades. Let&apos;s connect and discuss how I can sprinkle some innovation into your next project! 🚀       
            </p>
          </div>
    </motion.div>
  )
}

export default About 