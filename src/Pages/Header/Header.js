import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect style={{ height: " 80px" }} expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar className='nav-title' as={Link} to="/">Denton Dental</Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='bg-primary' id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-menu">
                            <Link to="/">Home</Link>
                            <a href="/#services">Services</a>
                            <Link to="/checkout">Checkout</Link>
                            <Link to="/appointment"> Appointment</Link>
                            <Link to="/about">About</Link>
                            <Link to="/signup">Signup</Link>
                            <Link to="/Login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;