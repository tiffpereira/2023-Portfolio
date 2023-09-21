'use client';
import { Carousel, Card, Button } from 'flowbite-react';
import pic from '../assets/portfoliohero.jpg'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BiLogoHtml5, BiLogoReact, BiLogoJavascript } from 'react-icons/bi'
import { FaCss3Alt, FaFilePowerpoint, FaFileExcel } from 'react-icons/fa'
import { SiSequelize } from 'react-icons/si'
import { BsFiletypeSql } from 'react-icons/bs'

//landing page image imports
import tastylanding from '../assets/ProjectsLanding/tastylanding.png'
import codrlanding from '../assets/ProjectsLanding/codrlanding.png'


export default function Projects() {
      return (
        <div>
            <div className='flex flex-col items-center mt-4 mb-4 pb-2'>
                <h5 className='tracking-wide text-gray-700'>Browse My Recent</h5>
                <h1 className='text-3xl font-bold mt-1 md:text-5xl md:mt-3'>Projects</h1>
            </div>
            <div className=''>
                <h1 className='text-2xl text-center font-bold mb-5 md:text-3xl md:mt-3'>Software Development</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-10 md:grid md:grid-cols-2 md:gap-4 md:px-4 md:justify-items-center lg:grid-cols-3'>


                {/* PROJECT ONE */}    
                <Card className="max-w-sm rounded-3xl ">
                
                <img 
                className='h-60 w-76 mx-auto m-2'
                alt="Meaningful alt text for an image that is not purely decorative"
                src={codrlanding}/>

                    <h5 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Codr. </p>
                        <div className='flex flex-row'>
                            <BiLogoReact className='w-8 h-8'/>
                            <SiSequelize className='w-8 h-8'/>
                            <FaCss3Alt className='w-8 h-8'/>
                        </div>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>A Twitter inspired application offering full CRUD functionalities for user posts and a live feed of all posts, bolstered by bcrypt for secure user authentication and login.</p>
                    </p>
                    <div className='flex flex-row justify-center space-x-5'>
                        <a href="https://github.com/RTSY-P3/Frontend" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill>
                                <FaGithub className='w-5 h-5 mr-2'/>
                                <p> Github </p>
                            </Button>
                        </a>
                        <a href="https://codr-community.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill >
                                <AiOutlineGlobal className='w-5 h-5 mr-2'/>
                                <p> Live Demo </p>
                            </Button>
                        </a>
                    </div>
                </Card>


                {/* PROJECT TWO - TASTY TABLE */}    
                <Card className="max-w-sm rounded-3xl ">
                
                <img 
                className='h-60 w-76 mx-auto m-2'
                alt="Meaningful alt text for an image that is not purely decorative"
                src={tastylanding}/>
                
                    <h5 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Tasty Table </p>
                        <div className='flex flex-row'>
                            <BiLogoHtml5 className='w-8 h-8'/>
                            <BiLogoJavascript className='w-8 h-8'/>
                            <FaCss3Alt className='w-8 h-8'/>
                        </div>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>A  responsive recipe search engine, with intuitive navigation and enhanced user experience through Figma wireframes and TheMealDB API integration.</p>
                    </p>
                    <div className='flex flex-row justify-center space-x-5'>
                        <a href="https://github.com/tiffpereira/tasty_table" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill>
                                <FaGithub className='w-5 h-5 mr-2'/>
                                <p> Github </p>
                            </Button>
                        </a>
                        <a href="https://tastytable.surge.sh/index.html" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill >
                                <AiOutlineGlobal className='w-5 h-5 mr-2'/>
                                <p> Live Demo </p>
                            </Button>
                        </a>
                    </div>
                </Card>
            </div>

{/* DATA ANALYSIS PROJECTS */}
            <div className='mt-14'>
                <h1 className='text-2xl text-center font-bold mb-5 md:text-3xl md:mt-3'>Data Analysis</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-10 md:grid md:grid-cols-2 md:gap-4 md:px-4 md:justify-items-center lg:grid-cols-3'>
                {/* PROJECT ONE */}    
                <Card className="max-w-sm rounded-3xl">
                <div className='h-72 w-72 mx-auto'>
                    <Carousel>
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                    </Carousel>
                </div>
                    <h5 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Kickstarter </p>
                        <div className='flex flex-row'>
                            <FaFilePowerpoint className='w-8 h-8'/>
                            <FaFileExcel className='w-8 h-8'/>
                        </div>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>Used pivot tables, vlookups, and statistical analysis to analyze key success factors for a campaign to rank in the top 10%, and presented data-driven strategies through a PowerPoint presentation.</p>
                    </p>
                    <div className='flex flex-row justify-center space-x-5'>
                        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill>
                                <FaGithub className='w-5 h-5 mr-2'/>
                                <p> Github </p>
                            </Button>
                        </a>
                        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill >
                                <AiOutlineGlobal className='w-5 h-5 mr-2'/>
                                <p> Live Demo </p>
                            </Button>
                        </a>
                    </div>
                </Card>
                {/* PROJECT TWO */}    
                <Card className="max-w-sm rounded-3xl">
                <div className='h-72 w-72 mx-auto'>
                    <Carousel>
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                        <img
                            alt="..."
                            src={pic}
                        />
                    </Carousel>
                </div>
                    <h5 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Iowa Liquor Sales </p>
                        <div className='flex flex-row'>
                            <FaFileExcel className='w-8 h-8'/>
                            <BsFiletypeSql className='w-8 h-8'/>
                        </div>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>Utilized SQL for data cleaning and analysis of Iowa liquor sales, and leveraged Excel to create visualizations and an interactive dashboard, identifying growth opportunities for Bacardi in the market.</p>
                    </p>
                    <div className='flex flex-row justify-center space-x-5'>
                        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill>
                                <FaGithub className='w-5 h-5 mr-2'/>
                                <p> Github </p>
                            </Button>
                        </a>
                        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Button color="gray" pill >
                                <AiOutlineGlobal className='w-5 h-5 mr-2'/>
                                <p> Live Demo </p>
                            </Button>
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    )
}
    
    
    







