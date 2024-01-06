"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
type Props = {}

function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words:[
            "Hi, The Name's is Rivu Naskar",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen relative flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden '>
        <BackgroundCircles/>
         <img className='relative h-32 w-32 rounded-full object-cover' src='https://github.com/rivuff/jhv/assets/74763144/a2466a9b-9466-4d77-bfb4-c56c1f62ef26'></img>
         <div className='z-20'>

            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
         
        

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>

        </div>
        </div>
    </div>
  )
}

export default Hero