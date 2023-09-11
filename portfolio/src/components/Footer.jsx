'use client';
import { Footer } from 'flowbite-react';
import logo from '../assets/NavBarLogo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function FooterWithLogo() {
  return (
    <div className='mt-6'>
        <Footer container>
        <div className="w-full text-center">
            <div className="w-full justify-between flex-row flex sm:items-center ">
            <Footer.Brand
                alt="Tiffany Pereira Logo"
                src={logo}
                className='h-12'/>
            <Footer.LinkGroup className=''>
                <Footer.Link href="https://github.com/tiffpereira" target="_blank">
                    <FaGithub className='w-8 h-8 m-2'/>
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/tiffanympereira/" target="_blank">
                    <FaLinkedin className='w-8 h-8 m-2'/>
                </Footer.Link>
                <Footer.Link href="mailto:Tiffanympereira@gmail.com" target="_blank">
                    <MdEmail className='w-8 h-8 m-2'/>
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <Footer.Copyright
                by=" Built With 🩷 By T Pereira"
                year={2023}/>
        </div>
        </Footer>
    </div>
  )
}


