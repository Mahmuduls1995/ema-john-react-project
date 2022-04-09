import React from 'react';
import { Link } from 'react-router-dom';
// import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (

<nav className="header">

<img src={logo} alt="" />
<div>
    <Link  style={{color:'gold'}} to="/shop">Shop</Link>
    <Link to="/orders">Orders</Link>
    <Link to="/inventory">Inventory</Link>
    <Link to="/about">About</Link>
</div>

</nav>

/* <Navbar bg="dark" expand="lg">
  <container className="d-flex">
    <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
   
      <Nav
        className="mx- 4 my-2 my-lg " 
        style={{ maxHeight: '1400px'}}
        navbarScroll
      >
        <Nav.Link className="text-white"  href="#action1">Home</Nav.Link>
        <Nav.Link className="text-white" href="#action2">Shop</Nav.Link>
       
        <Nav.Link className="text-white" href="#" >
          Cart
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    
  </container>
</Navbar> */

        

        
    );
};

export default Header;