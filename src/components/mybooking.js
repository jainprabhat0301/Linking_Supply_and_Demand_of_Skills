import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form,FormGroup,Label,Input } from 'reactstrap';
import {  MDBIcon ,MDBBtn } from 'mdbreact';

import { Button,ButtonToolbar ,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Mybooking = ({db,selser,bdate,btime,utype,  getcbooking,getpbooking}) => {
    return(
      <div>

          {utype=="c" ?
          <div>

            
<Card>
    <Card.Body>
    <p className="h2 text-center " style={{color:'black'}} >My Bookings</p>

    {db.cbooking.map((b,index)=>
    <div>
      <Card>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  <Card.Body>
    {/* <Card.Title>Electritian</Card.Title> */}
    <Card.Text>
    <p>Service : {b.servicename}</p>
        <p>Professional email : {b.cemail}</p>
        <p>Booking Date : {b.bdate}</p>
        <p>Booking Time : {b.btime}</p>
    <p>Booking Address : {b.baddress}</p>
           </Card.Text>
  </Card.Body>
</Card>
        
        <br></br>
        <Link to='/chome'>  <MDBBtn  >Cancel</MDBBtn></Link>

        </div>
  )}
        
        <br></br>

          <Link to='/chome'> <Button  variant="success" >Cancel</Button> </Link>

        </Card.Body>
      </Card>
        
      <Navbar bg="light" variant="light" fixed="bottom">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
      <Nav.Link><Link to="/chome"><MDBBtn  variant="primary" >Home</MDBBtn><MDBIcon icon="home" /></Link></Nav.Link>
    {}
      <Nav.Link ><Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getcbooking()}>Bookings</MDBBtn></Link></Nav.Link>
      <Nav.Link style={{color:'black'}} ><Link to="/myprofile"><MDBBtn  variant="primary" >Profile</MDBBtn></Link></Nav.Link>
    </Nav>
  </Navbar>

        <br></br>

          </div>
        :<div>

        
<Card>
    <Card.Body>
    <p className="h2 text-center " style={{color:'black'}} >My Bookings</p>

    {db.pbooking.map((b,index)=>
    <div>
     


      <Card>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  <Card.Body>
    {/* <Card.Title>Electritian</Card.Title> */}
    <Card.Text>
    <p>{b.servicename} &nbsp; Rate :  Rs {b.serviceprice}</p>
          <p> ELECTRITION > REPAIR</p>
          <p> {b.servicedes}</p>
            <p>Location : {b.baddress} </p>
            <p>Task Time : {b.btime}</p>
            <p>Task Date : {b.bdate}</p>
            <p>Payment Mode : Cash</p>
            <p>Customer Name</p>
        <p> {b.cemail}</p>
           </Card.Text>
  </Card.Body>
</Card>
        
        <br></br>
        </div>
  )}
        
        <br></br>

          <Link to='/phome'> <Button  variant="success" >Cancel</Button> </Link>

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

        <br></br>

    
          </div>}

       
    </div>
    
  )
}

export  {Mybooking};