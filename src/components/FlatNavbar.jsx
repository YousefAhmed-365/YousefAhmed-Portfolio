import React from 'react'
import { HashLink } from 'react-router-hash-link'

import { Navbar, Container, Nav } from 'react-bootstrap'

export default function FlatNavbar() {
    return (
        <Navbar expand="md" className="justify-content-center">
            <Container className='d-flex justify-content-center'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">
                        <Nav.Link as={HashLink} smooth to="/">Home</Nav.Link>
                        <Nav.Link as={HashLink} smooth to="/#about-section">About</Nav.Link>
                        <Nav.Link as={HashLink} smooth to="/#projects-section">Projects</Nav.Link>
                        <Nav.Link as={HashLink} smooth to="/#contact-section">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
