import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navbaritems() {
    // let linkClass = 'link';
    // if(linkClass.isActive) {
    //     linkClass += 'link-active';
    // }
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Shoe Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center">
              <NavLink className='link' activeClassName='active' exact to='/'>Home</NavLink>
              <NavLink className='link' activeClassName='active' exact to='/about'>About Us</NavLink>
              <NavLink className='link' activeClassName='active' exact to='/contactus'>Contact Us</NavLink>
              <NavLink className='link' activeClassName='active' exact to='/product'>Product</NavLink>
              <NavLink className='link' activeClassName='active' exact to='/product/:id'>ProductItem</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <h1>This is Navbar Component</h1>
            <Link className='link' to='/'>Home </Link>
            <Link className='link' to='/about'>About Us </Link>
            <Link className='link' to='/contactus'>Contact Us </Link>
            <Link className='link' activeClassName="active" to='/product'>Product </Link>
            <Link className='link' to='/product/:id'>Product Item </Link> */}
    </nav>
  );
}
