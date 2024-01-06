"use client"

import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'

import {useForm, SubmitHandler} from "react-hook-form"


type Props = {};
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactMe = (props: Props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
      
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        console.log(formData);

        window.location.href = `mailto:rivunaskar0@gmail.com?subject=${formData.subject}&body=hi, my name is ${formData.name}. ${formData.message} (${formData.email})`; 
    }


  return (
    <div className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row px-10 justify-evenly mx-auto items-center
    '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        
        <div className='flex flex-col space-y-8 top-48'>
            <div className='mt-20'>
            <h4 className='text-2xl md:text-3xl font-semibold text-center '>
                I have got just what you need.
                <span className='underline decoration-[#F7AB0A]/50'> {" "}Let's Talk</span>
            </h4>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'> 
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl md:text-2xl'>+91 9083896773</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'> 
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl md:text-2xl'>rivunaskar0@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'> 
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl md:text-2xl'>+91 9083896773</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto  '>
                <div className='fllex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email'  className='contactInput'   type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject'  className='contactInput'  type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput'  />
                
                <button type='submit' className='bg-[#F7AB0A] hover:bg-[#f4c561] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe