import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut=() => {
    signOut(auth);
  }
  return (

    <nav className="header">

      <img src={logo} alt="" />
      <div>
        <Link style={{ color: 'gold' }} to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {
          user ?
            <button onClick={handleSignOut}><span className="ml-3 text-white text-md">Sign Out</span></button>
            :
            <Link to="/login">Login</Link>
        }

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