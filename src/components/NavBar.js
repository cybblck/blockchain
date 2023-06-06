import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo1 from '../assets/img/rev.png';
import logo from '../assets/img/LOGO.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={logo1} alt="Logo" />

            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
<<<<<<< HEAD
              <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Services</Nav.Link>
              <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Expertise</Nav.Link>
              <Nav.Link href="#event" className={activeLink === 'event' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('event')}>Events</Nav.Link>

              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About us</Nav.Link>
              <Nav.Link href="#what" className={activeLink === 'what' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('what')}>What We Do?</Nav.Link>

              <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Team</Nav.Link>

              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact us</Nav.Link>
=======
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Services</Nav.Link>
              <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Expertise</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>About us</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact Us</Nav.Link>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc4c09f (navbar)

=======
=======

>>>>>>> 89172d6 (nav)
              
>>>>>>> 4049609 (navbar)
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
<<<<<<< HEAD
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Login</span></button>
              </HashLink> */}
=======
              <HashLink to='#connect'>
                <button className="vvd"><span>Revolutionising Blockchain</span></button>
              </HashLink>
>>>>>>> dc4c09f (navbar)
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
