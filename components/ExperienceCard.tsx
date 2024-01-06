"use client"
import React from 'react'
import {motion} from "framer-motion"

type Props = {
  imageUrl: string;
  position: string;
  companyName: string;
  techStack: string[];
  startDate: string;
  endDate: string;
  descriptionPoints: string[];
};


const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden h-full'>
        <motion.img
        initial={{
            y:-100,
            opacity:0, 
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
         className='w-24 h-24 rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center' 
        src={props.imageUrl}
         alt="" />

         <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{props.position}</h4>
            <p className='text-2xl font-bold mt-1'>{props.companyName}</p>
            <div className='flex space-x-2 my-2'>
            {props.techStack.map((tech, index) => (
            <img
              key={index}
              className='h-10 w-10 rounded-full'
              src={tech} // Assuming you have a function to get tech icons
              alt=''
            />
          ))}
            </div>
            <p className=' py-5 text-gray-300'>{props.startDate} - {props.endDate}</p>

            <div className='h-[120px] md:h-[140px] overflow-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
            <ul className='list-disc space-y-4 ml-5 text-md'>
            {props.descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
            </ul>
            </div>
            </div>
    </article>
  )
}

export default ExperienceCard