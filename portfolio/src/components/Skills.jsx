'use client';
import { Card } from 'flowbite-react';

export default function Skills() {
  return (
    <div>
        <div className='flex flex-col items-center mt-4 mb-4'>
            <h5 className='tracking-wide text-gray-700'>Explore My</h5>
            <h1 className='text-3xl font-bold mt-1 md:text-5xl md:mt-3'>Skills</h1>
        </div>
        <div className=''>
            <div className='flex flex-col justify-center mb-6 lg:flex-row '>
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
        </div>
    </div>
    
  )
}


