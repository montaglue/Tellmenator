import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './style.css'

const HomeLink = (User) => {
    console.log(User)
    if (User != null) {
        return <li className="nav-link">
            <NavLink to="/home">Home</NavLink>
        </li>;
    }

}

const Header = ({ User }) => {
    return <>
        <header>
            <div className="logo logo-placeholer"></div>
            <nav>
                <ul className="nav-links">
                    {HomeLink(User)}
                    <li className="nav-link">
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/">About</NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink to="/login" className="login"><button>Login</button></NavLink>
        </header>
    </>;
}

/*
const Header = () => {
    return (
        <Navbar className="navbar">
            <Container className="navbar-container">
                <Navbar.Brand className="home" href="/home">Tellmenator</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="login">
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
*/
export default Header;