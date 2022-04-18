import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect style={{ height: " 80px" }} expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar className='nav-title' as={Link} to="/">Sajib Dental</Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='bg-primary' id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-menu">
                            <Link to="/">Home</Link>
                            <a href="home#services">Services</a>
                            <Link to="/checkout">Checkout</Link>
                            <Link to="/about">About</Link>
                            <Link to="/signup">Signup</Link>
                            {
                                user ?
                                    <a className='logout' onClick={handelSignOut} >Logout</a>
                                    :
                                    <Link to="/Login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;