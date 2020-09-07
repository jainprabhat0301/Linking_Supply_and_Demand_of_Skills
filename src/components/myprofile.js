import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  MDBIcon ,MDBBtn } from 'mdbreact';

import { Button,ButtonToolbar ,Form,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Myprofile = ({db,useremail,uname,ucity,ustate,utype,getpbooking,getcbooking}) => {
    return(
      <div>

        { utype ?

      <div>

<Card >
  <Card.Body>
    
  
     <Card>
        <Card.Body>
        <p className="h2 text-center " style={{color:'black'}} >MY PROFILE</p>

        <p>Username : {uname}</p>
          <p>City : {ucity}</p>
          <p>State : {ustate}</p>
          <Button variant="primary">Edit</Button>    &nbsp;
          {utype=="c" 
          ? <Link to="/chome"><Button variant="primary">Cancel</Button> </Link>   
          : <Link to="/phome"><Button variant="primary">Cancel</Button> </Link>   

          }
        </Card.Body>
      </Card>
        
        <br></br>

<br></br>
  </Card.Body>
</Card>

<Navbar bg="light" variant="light" fixed="bottom">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
        {utype=="c"
        ? <Nav.Link><Link to="/chome"><MDBBtn  variant="primary" >Home</MDBBtn><MDBIcon icon="home" /></Link></Nav.Link>
    :   <Nav.Link><Link to="/phome"><MDBBtn  variant="primary" >Home</MDBBtn><MDBIcon icon="home" /></Link></Nav.Link>
    }
     {utype=="c" 
     ?      <Nav.Link ><Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getcbooking()}>Bookings</MDBBtn></Link></Nav.Link>
    :       <Nav.Link ><Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getpbooking()}>Bookings</MDBBtn></Link></Nav.Link>
    }
      <Nav.Link style={{color:'black'}} ><Link to="/myprofile"><MDBBtn  variant="primary" >Profile</MDBBtn></Link></Nav.Link>
    </Nav>
  </Navbar>

    </div>
    : null
   
}
    </div>
    
  )
}


export {Myprofile};