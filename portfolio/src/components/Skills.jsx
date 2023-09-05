'use client';
import { Card } from 'flowbite-react';
import { FaHtml5, FaCss3Alt, FaReact, FaFileExcel, FaPython, FaRProject } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoPostgresql, BiLogoMongodb, BiLogoFlutter } from 'react-icons/bi'
import { BsFiletypeSql } from 'react-icons/bs'
import { SiTableau, SiPowerbi, SiTailwindcss } from 'react-icons/si'
import { MdQueryStats } from 'react-icons/md'

export default function Skills() {
  return (
    <div className='mt-10 pt-2 bg-blue-100'>
        <div className='flex flex-col items-center mt-4 mb-4 pb-2'>
            <h5 className='tracking-wide text-gray-700'>Explore My</h5>
            <h1 className='text-3xl font-bold mt-1 md:text-5xl md:mt-3'>Skills</h1>
        </div>
        <div className='mx-6'>
            <div className='flex flex-col mx-auto justify-center mb-6 lg:flex-row'>
                <Card
                className="w-full mb-6 mr-6 rounded-3xl lg:w-[45%]"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                        <p className='place-self-center'>
                        Software Development
                        </p>
                    </h5>
                    <div className='grid grid-cols-3 gap-6 w-full -ml-3 md:justify-items-center md:-ml-11'>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <FaHtml5 className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>HTML</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <FaCss3Alt className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>CSS</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <BiLogoJavascript className='w-10 h-10 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Javascript</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <FaReact className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>React</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <BiLogoPostgresql className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>PostgreSQL</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <BiLogoMongodb className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>MongoDB</h1>
                                    <p>Intermediate</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <FaPython className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Python</h1>
                                    <p>Basic</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <BiLogoFlutter className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Flutter</h1>
                                    <p>Basic</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <SiTailwindcss className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Tailwind</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </Card>
                {/* DATA ANAlYSIS SECTION  */}
                <Card
                className="w-full mb-6 mr-6 rounded-3xl lg:w-[45%]"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                        <p className='place-self-center'>
                        Data Analysis
                        </p>
                    </h5>
                    <div className='grid grid-cols-3 gap-6 w-full -ml-3 md:justify-items-center md:-ml-11'>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <FaFileExcel className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Excel</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <BsFiletypeSql className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>SQL</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <SiTableau className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Tableau</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <SiPowerbi className='w-10 h-10 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Power Bi</h1>
                                    <p>Intermediate</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <FaRProject className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>R</h1>
                                    <p>Basic</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <FaPython className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Python</h1>
                                    <p>Basic</p>
                                </p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-row items-center'>
                            <div>
                            <MdQueryStats className='w-9 h-9 mr-2'/>
                            </div>
                            <div>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <h1 className='font-bold'>Statistical Analysis</h1>
                                    <p>Experienced</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </Card>
            </div>
        </div>
    </div>
  )
}


