import React, { useState, useEffect } from 'react';
import NavLogo from '../assets/NavBarLogo.png'
import { Button, Navbar } from 'flowbite-react'
'use client'
import { Link } from 'react-scroll'

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
        <Button className="mr-3">
          Resume
        </Button>
        <Navbar.Toggle />
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


