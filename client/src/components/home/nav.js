import React from "react";
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';



export default function NavFunc() {
    return (
        //<Nav className="justify-content-center">
      //  <Nav fill variant="tabs" defaultActiveKey="/home">
      //      <Nav.Item>
      //          <Link eventKey="/Home">Home</Link>{' '}
      //      </Nav.Item>
      //      <Nav.Item>
      //          <Link eventKey="/Sign-up">Sign up</Link>{' '}
      //          
      //      </Nav.Item>
      //      <Nav.Item>
      //          <Link eventKey="/Login">Login</Link>{' '}
      //      </Nav.Item>
      //      <Nav.Item>
      //          <Link eventKey="/About">About</Link>{' '}
      //      </Nav.Item>
      //      <Nav.Item>
      //          <Link eventKey="/Campains">Campains</Link>{' '}
      //      </Nav.Item>
      //      <Nav.Item>
      //          <Link eventKey="/Locations">Locations</Link>{' '}
      //      </Nav.Item>
      //      <Nav.Item>
      //          <Link eventKey="/customers">customers</Link>{' '}
      //      </Nav.Item>
      //  </Nav>
      <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Sign-up">Sign up</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Login">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="/About">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="/Campains">Campains</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey ="/Locations">Locations</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey ="/Customers">Customers</Nav.Link>
  </Nav.Item>
</Nav>
    )
}