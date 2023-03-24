import React from 'react'
import NavbarChaman from '../navbar/Navbar'
import './header.css'
import Container from 'react-bootstrap/Container'

function Header() {
  return (
    <div className='header'>
        <NavbarChaman />
        <Container style={{height: '80%'}}>
        <div className='header-text'>
            <h1>Dunyo bo’lab sayohat ChamanTour bilan!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='chaman-btn header-btn'>Batafsil</button>
        </div>
        </Container>
    </div>
  )
}

export default Header