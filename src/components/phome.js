import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  MDBIcon ,MDBBtn } from 'mdbreact';

import { Button,ButtonToolbar ,Form,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Phome = ({db,useremail,uname,ucity,ustate,utype,logOut,getcservice,getpbooking}) => {
    return(
      <div>

        {db.pservice.length &&  useremail ?

      <div>
         <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Professional Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link> <Link to="/phome"><Button  variant="primary" >Home</Button></Link></Nav.Link>
      <Nav.Link> <Link to="/mybooking"><Button  variant="primary" onClick={()=>getpbooking()}>My Bookings</Button></Link></Nav.Link>
      <Nav.Link> <Link to="/addservice"><Button  variant="primary" >Add Service</Button></Link></Nav.Link>
      <Nav.Link> <Link to="/myprofile"><Button  variant="primary" >Profile</Button></Link></Nav.Link>

      {/* <NavDropdown title="My Bookings" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Pending</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Upcoming</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Previous</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Link to="/login"><Button  variant="primary" onClick={()=>logOut()} >Logout</Button></Link>

    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
      

<Card >
  <Card.Body>
  <p className="h2 text-center " style={{color:'green'}} >{uname}</p>
  {/* <p className="h2 text-center " style={{color:'black'}} >My Services</p> */}
  <div style={{textAlign:'center'}}>
  <Link to='/addservice'> <Button  variant="success">Add Service</Button> </Link>
  </div>
  <p className="h4 text-center " style={{color:'green'}} >Provider</p>
  <p className="h4 text-center " style={{color:'green'}} >{ucity} , {ustate}</p>

  <Card>
        <Card.Body>
<p><b>About</b> <br></br>
Are you looking for the best electrician in your area? 
Some jobs should only be undertaken by a professional, and we know you’d rather not fiddle with your electrical wiring or outlets unless you know exactly what you’re doing.
</p>
<p><b>Description</b>
  <br></br>
  Vetted and background-checked professionals.  <br></br>
  Friendly 24/7 customer service.<br></br>
  No time windows, book when you want.<br></br>
</p>
<p><b>Contact</b></p>
  <p>{useremail}</p>
  </Card.Body>
  </Card>

<br></br>
<p className="h4  " style={{color:'green'}} >Services</p>
  {db.pservice.map((p,index)=>
    <div>
     <Card>
        <Card.Body>
        <p>{p.servicename} &nbsp; Rate :  Rs {p.serviceprice}</p>
          <p> Catgory > Subcategory</p>
          <p> {p.servicedes}</p>
            <p>Location : {p.pcity} {p.pstate}</p>
        
                  </Card.Body>
      </Card>
        
        <br></br>
        </div>
  )}

<br></br>


{/* It is used only for testing without database */}
{/* <Link to='/chome'> <Button  variant="success" onClick={()=>getcservice()}>Go to Customer Home</Button> </Link> */}

  </Card.Body>
</Card>


<Navbar bg="light" variant="light" fixed="bottom">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
      <Nav.Link><Link to="/phome"><MDBBtn  variant="primary" >Home</MDBBtn><MDBIcon icon="home" /></Link></Nav.Link>
      <Nav.Link ><Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getpbooking()}>Bookings</MDBBtn></Link></Nav.Link>
      <Nav.Link style={{color:'black'}} ><Link to="/myprofile"><MDBBtn  variant="primary" >Profile</MDBBtn></Link></Nav.Link>
    </Nav>
  </Navbar>

    </div>

    :null
    // <div>
    //  <Link to='/addservice'> <Button  variant="success">Add New Service</Button> </Link>
    // </div>
}
    </div>
    
  )
}


export {Phome};