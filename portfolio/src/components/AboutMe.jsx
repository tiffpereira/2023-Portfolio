'use client';
import { Card } from 'flowbite-react';
import profilePic from '../assets/portfolioprofilepic.jpg'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export default function AboutMe() {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <RiDoubleQuotesL />
            <h1 className='text-center text-3xl p-2'>THIS WiLL BE A QUOTE</h1>
            <RiDoubleQuotesR />
        </div>
        <div className='flex flex-col items-center mt-12 mb-16'>
            <h5 className='tracking-wide text-gray-700'>Get To Know More</h5>
            <h1 className='text-3xl font-bold mt-1 md:text-5xl md:mt-3'>About Me</h1>
        </div>
        <div className='flex flex-col items-center lg:flex-row lg:mx-auto lg:w-4/5 lg:items-center mx-6'>
            <img 
            className='w-[45%] rounded-3xl mb-6 md:w-[30%] lg:w-72'
            src={profilePic}
            alt='profile picture'/>
            <div className='flex flex-col lg:ml-10'>
                <div className='flex justify-center mb-6 lg:flex-row '>
                    <Card
                    className="w-48 h-60 md:w-[50%] md:h-40 lg:w-[45%] mr-6 rounded-3xl"
                    href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                            Experience
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                            2+ Years
                            </p>
                            <p>
                            Full-Stack Development & Data Analysis 
                            </p>
                        </p>
                    </Card>
                    <Card
                    className="w-48 h-60 md:w-[50%] md:h-40 lg:w-[45%] rounded-3xl"
                    href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                            Education
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                            B.S Biology, Honors Minor in Computer Science
                            </p>
                            <p>
                            Magna Cum Laude
                            </p>
                        </p>
                    </Card>
                </div>
                <div className='lg:mx-10'>
                    <p> Hi my name is Tiffany! I am a Full-Stack Software Engineer with a background that spans the healthcare and tech industries. My analytical skills, honed from a Biology degree, have been a cornerstone in my transition to the tech sector, where I excel in creating robust and user-friendly solutions.</p>
                
                    <p>Based in Boston, I am a dynamic professional who blends technical proficiency with a knack for analyzing and solving complex problems. Passionate about utilizing technology to not only enhance user experiences but also to provide innovative solutions to real-world problems, I am committed to continuous learning and growth in my journey to make a meaningful impact in the tech industry.</p>
                </div>
                
            </div>
        </div>
       
    </div>
  )
}


