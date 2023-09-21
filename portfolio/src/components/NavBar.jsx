import React, { useState, useEffect } from 'react';
import NavLogo from '../assets/NavBarLogo.png'
import { Navbar, Dropdown } from 'flowbite-react'
'use client'
import { Link } from 'react-scroll'
import '../App.css'

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      fluid
      rounded
       style={{
        position: 'sticky',
        top: 0,
        transition: 'opacity 0.5s',
        opacity: showNavBar ? 1 : 0,
        zIndex: 1000,
      }}
    >
      <Navbar.Brand href="/">
        <img
          alt="Tiffany Pereira"
          className="mr-3 h-12 sm:h-14"
          src={NavLogo}
        />
      </Navbar.Brand>
      
      <div className="flex md:order-2">
          <Dropdown label="Download Resume" className="custom-dropdown">
            <Dropdown.Item href="https://docs.google.com/document/d/1xNr41qzT9P0DleFMmRFYpXZB9aisbdQEMjRJS-P5Y0o/edit?usp=sharing" target="_blank">
              Software Engineer
            </Dropdown.Item>
            <Dropdown.Item href="https://docs.google.com/document/d/1lFyMIauB4nI2VDYPh223xBPRCs-zEZc083E3e7DCYsc/edit?usp=sharing" target="_blank">
              Data Analyst
            </Dropdown.Item>
          </Dropdown>
        <Navbar.Toggle className='ml-5' />
      </div>
      <Navbar.Collapse>
        <Link to='AboutMe' smooth={true} duration={600} offset={-80} className='cursor-pointer'>
          <Navbar.Link>
            <p> About Me </p>
          </Navbar.Link>
        </Link>
        <Link to='Skills' smooth={true} duration={600} offset={-70} className='cursor-pointer'>
          <Navbar.Link>
            Skills
          </Navbar.Link>
        </Link>
        <Link to='Projects' smooth={true} duration={600} offset={-70} className='cursor-pointer'>
          <Navbar.Link>
            Portfolio
          </Navbar.Link>
        </Link>
        <Link to='Contact' smooth={true} duration={600} offset={-70} className='cursor-pointer'>
          <Navbar.Link>
            Contact
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

