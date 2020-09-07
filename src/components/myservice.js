import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  MDBCol, MDBContainer, MDBRow, MDBFooter,MDBBtn, MDBIcon,MDBFormInline,MDBInput} from "mdbreact";

import { Button,ButtonToolbar ,Form,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Myservice = ({db,useremail,uname,logOut,getcservice,getpbooking}) => {
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
  <p className="h2 text-center " style={{color:'black'}} >My Services</p>

{/* Search Bar not working */}

  <MDBCol md="6">
      <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3"  />
    </MDBCol>
    {/* onChange={(e)=>searchHandler(e)} */}
    {/* <ul className="list-group">
  {res.map((p,index)=> <li className="list-group-item" onClick={(value)=>getsearchitem(value)} value={index}>{p}</li>)} 
</ul> */}

{/* Add Service Button */}
  <Link to='/addservice'> <Button  variant="success">Add New Service</Button> </Link>


  {db.pservice.map((p,index)=>
    <div>
     <Card>
        <Card.Body>
          <p>{p.servicename} &nbsp; Rate :  Rs {p.serviceprice}</p>
          <p> Catgory > Subcategory</p>
          <p> {p.servicedes}</p>
            <p>Location : {p.pcity} {p.pstate}</p>
          <Button variant="primary">Edit</Button>    &nbsp;
          <MDBBtn variant="warning">Remove<MDBIcon fab icon="500px" /></MDBBtn>
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


export {Myservice};