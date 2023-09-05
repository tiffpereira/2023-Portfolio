import React from 'react'
import NavLogo from '../assets/NavBarLogo.png'
import { Button, Navbar } from 'flowbite-react'
'use client'

export default function NavBar() {
  return (
    <Navbar
      fluid
      rounded
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
        <Navbar.Link
          href="#"
        >
          <p>
            About Me
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Skills
        </Navbar.Link>
        <Navbar.Link href="#">
          Portfolio
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


