import React from 'react'
import './Nav.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaHome, FaSearch, FaList, FaDoorOpen, FaTrash, FaUser, FaImage, FaPhoneAlt, FaBriefcase, FaChessKing } from 'react-icons/fa'
import Skills from 'Skills/Skills'
import Work from 'Work/Work'



const Nav = () => {
  return (
    <>
 <div className="Nav">
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary navbar-sticky" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#" className='navBar'>GROUP 1</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="nav-toggle"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#"><FaHome /> Home</Nav.Link>
                  <Nav.Link href="#About"><FaList /> About</Nav.Link>
                  <NavDropdown
                    title="More"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3"><FaPhoneAlt /> Contact</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <FaImage /> Hero
                    </NavDropdown.Item>
                    <NavDropdown.Item href="Skills">
                    <FaChessKing /> Skills
                    </NavDropdown.Item>
                    <NavDropdown.Item href='Work'>
                     <FaBriefcase /> Work
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary"><FaSearch /></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    </> 
  )
}

export default Nav
