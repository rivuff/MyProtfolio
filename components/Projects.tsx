"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
type Props = {}

const Projects = (props: Props) => {
  const projects = [
    {
      name: 'AudioVista',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/778004134/display_1500/stock-vector-logo-headphones-musical-equalizer-streaming-music-778004134.jpg',
      description: "Introducing a fullstack marvel - a dynamic music streaming site that goes beyond playlists! 🎶🚀 Discover fresh beats, share hidden gems, and elevate your groove. Upgrade to premium for an ad-free, seamless experience. It's not just a site; it's your backstage pass to a music season. Hit play, vibe on, and let the beats speak. Welcome to the coolest online corner where diversity in sounds takes center stage. Join the party – good music deserves this killer platform! 🎉🔊",
      projectLink: 'https://audio-vista-pink-ten.vercel.app/'
    },
    {
      name: 'Airline Management Booking System',
      imageUrl:'https://www.shutterstock.com/shutterstock/photos/2144556033/display_1500/stock-vector-aviation-and-airlines-logo-tour-and-travel-agency-symbol-design-vector-2144556033.jpg',
      description: "Behold my backend masterpiece - an airline management system soaring on load balancing finesse! ✈️💻 Crafting a seamless journey, it ensures impeccable performance from booking to reservations. A captain of efficiency, this project orchestrates the perfect flight plan for users to breeze through hassle-free travel management. It's not just code; it's a ticket to a turbulence-free virtual skies journey! 🌐✈️ #CodeAboveClouds",
      projectLink: 'https://github.com/rivuff/AirlineManagementSystem'
    },
    {
      name: 'FoodMonster',
      imageUrl: 'https://static.wixstatic.com/media/fe3714_466793190e7a4112b116aca0b79ffc46~mv2.png/v1/fit/w_2500,h_1330,al_c/fe3714_466793190e7a4112b116aca0b79ffc46~mv2.png',
      description:"Unleash the vibes with my full-stack Food Monster – a flavor-packed ordering site with Redux Toolkit magic. For jet-setters, my airline management system soars high, balancing loads effortlessly. Meanwhile, groove to beats on my music streaming site, a casual haven for premium sound experiences. And, in the Twitter Clone, my backend masterpiece orchestrates the symphony of 280-character wonders. 🚀🍔🎶🐦 #CodeWizardry",
      projectLink: 'https://www.youtube.com/watch?v=JqMcMD9JxpM'
    },
    {
      name: 'twitter clone',
      imageUrl: 'https://i.pinimg.com/originals/85/cc/68/85cc684775322326e6d958dcacbf0cb5.jpg',
      description: "Meet my backend marvel - a Twitter Clone that's more than code; it's a symphony of brilliance! From seamless user authentication to real-time updates, this project is the backstage pass to the mechanics of microblogging. Buckle up for a journey through the backend corridors of tweets and retweets! 🚀🔗 #CodeAndTweet",
      projectLink: 'https://github.com/rivuff/Twitter_Backend'
    }
  ];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      

      <div className='relative w-full flex overflow-x-visible top-[10%] overflow-y-hidden snap-x snap-mandatory z-20'>
      {
          projects.map((project, i)=>(
            <div className='flex-shrink-0 snap-center flex flex-col space-y-5 
            items-center justify-center p-20 md:p-44 w-screen' key={i}>
              <motion.img 
              initial={{
                y:-300,
                opacity:0
              }}
              transition={{
                duration:1.2
              }}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              src={project.imageUrl} alt="" className='w-1/2 md:w-2/5 xl:w-1/4'/>

             
              <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
              <a target="_blank" href={project.projectLink}>
                <h4 className='text-4xl font-semibold text-center cursor-pointer text-gray-400 hover:text-gray-100'>
                  <span className='underline decoration-[#F7AB0A]/50'>Project number {i+1} of {projects.length}:</span> {project.name}
                </h4>
                </a>
              </div>
              

              <p className='text-md text-center md:text-left'>{project.description}</p>
            </div>
          ))
        } 
 
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12
      '>
       
      </div>
    </div>
  )
}

export default Projects