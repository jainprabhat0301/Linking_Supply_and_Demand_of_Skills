import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { Button,ButtonGroup,ButtonToolbar ,Form,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup,Col,Row,Container } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBBtn, MDBIcon,MDBFormInline,MDBInput} from "mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Chome = ({db,logOut,getcbooking,selectservice,searchHandler,getsearchitem,res,getcard}) => {
    return(
      <div>

        
         <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Customer Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link> <Link to="/chome"><Button  variant="primary" >Home</Button></Link></Nav.Link>
      <Nav.Link> <Link to="/mybooking"><Button  variant="primary" onClick={()=>getcbooking()} >My Bookings</Button></Link></Nav.Link>
      <Nav.Link> <Link to="/myprofile"><Button  variant="primary" >Profile</Button></Link></Nav.Link>

{/*       
      <NavDropdown title="My Bookings" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Pending</NavDropdown.Item> 
<NavDropdown.Item ><Button  variant="primary"  onClick={()=>getcustomerbooking()}>Mybooking</Button></NavDropdown.Item>
        <NavDropdown.Item >Previous</NavDropdown.Item>
        <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Link to="/login"><Button  variant="primary"  onClick={()=>logOut()}>Logout</Button></Link>

    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

     {db.cservice.length ?
     
     <div> 

<Card >
  <Card.Body>
    
  {/* <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Search Service</Form.Label>
    <Form.Control type="text" placeholder=""  onChange={(e)=>searchHandler(e)} />
  </Form.Group>
  </Form> */}


  <MDBCol md="6">
      <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3"  onChange={(e)=>searchHandler(e)} />
    </MDBCol>

    <ul className="list-group">
  {res.map((p,index)=> <li className="list-group-item" onClick={(value)=>getsearchitem(value)} value={index}>{p}</li>)} 
</ul>


{/* 
<ButtonGroup vertical>
{res.map((person,index)=> <Button value={person} onClick={(person)=>getsearchitem(person)} >{person} </Button>)} 
  </ButtonGroup> */}


  {db.cservice.map((b,index)=>
    <div>

<Card>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  <Card.Body>
    <Card.Title>Electritian</Card.Title>
    <Card.Text>
    {/* <p>Service : {b.servicename}</p> */}
          <p>Description : {b.servicedes}</p>
          <p>Price : Rs {b.serviceprice}</p>    </Card.Text>
          <Link to='/makebooking'>  <MDBBtn onClick={()=>selectservice(b)}>Make Booking</MDBBtn></Link>
  </Card.Body>
</Card>

     
        
        <br></br>
        </div>
  )}

<br></br>
{/* <Card>
<Card.Body>
<Link to="/chome"><MDBBtn  variant="primary" >Home</MDBBtn><MDBIcon icon="home" /></Link>
<Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getcbooking()}>Bookings</MDBBtn></Link>
<Link to="/myprofile"><MDBBtn  variant="primary" >Profile</MDBBtn></Link>
</Card.Body>
      </Card> */}
{/*       
<Navbar bg="light" variant="light" fixed="bottom">
  
     <Nav.Link><Link to="/chome"><i class="fa fa-address-book" style={{fontSize:'36px'}}  ></i></Link></Nav.Link>
      <Nav.Link ><Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getcbooking()}>Bookings</MDBBtn></Link></Nav.Link>
      <Nav.Link style={{color:'black'}} ><Link to="/myprofile"><MDBBtn  variant="primary" >Profile</MDBBtn></Link></Nav.Link>
  


  
  </Navbar> 
 
  <Container >
  <Row>
    <Col  ><Link to="/chome"><MDBBtn  style={{ float: 'left' }}>Home</MDBBtn></Link></Col>
    <Col  ><Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getcbooking()}><MDBIcon icon="address-book" /></MDBBtn></Link></Col>
    <Col  ><Link to="/myprofile"><MDBBtn  style={{ float: 'right' }}>Home</MDBBtn></Link></Col>
  </Row>
</Container> */}

  {/* <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
  <Nav.Link><Link to="/chome"><MDBBtn  variant="primary" >Home</MDBBtn><MDBIcon icon="home" /></Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link ><Link to="/mybooking"><MDBBtn  variant="primary" onClick={()=>getcbooking()}>Bookings</MDBBtn></Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link style={{color:'black'}} ><Link to="/myprofile"><MDBBtn  variant="primary" >Profile</MDBBtn></Link></Nav.Link>
      
 
  </Nav.Item>
</Nav> */}



  </Card.Body>
</Card>




{/* <MDBFooter color="blue" className="font-small fixed-bottom pt-4 mt-4">
<div className="footer-copyright text-center py-3">
        <MDBContainer >
         <Button  variant="success" >Home</Button> &nbsp;&nbsp;
         <Button  variant="success" >Home</Button> &nbsp;&nbsp;
         <Button  variant="success" > Home</Button> 
        </MDBContainer>
      </div>
    </MDBFooter> */}



</div>

: 
<div>

<Card>
<Card.Body>

      <Card>
      <Card.Body>


      <MDBCol md="6">
      <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3"  onChange={(e)=>searchHandler(e)} />
    </MDBCol>

    <ul className="list-group">
  {res.map((p,index)=> <li className="list-group-item" onClick={(value)=>getsearchitem(value)} value={index}>{p}</li>)} 
</ul>


<Card>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  <Card.Body>
    <Card.Title>Electritian</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
 <Link to="/chome">   <MDBBtn onClick={(value)=>getcard(value)} value={'Electritian'}>Select</MDBBtn></Link>
  </Card.Body>
</Card>

<br></br>

<Card>
  <Card.Img variant="top" src="https://benjaminfranklinplumbingfortworth.com/wp-content/uploads/2017/07/Realizing-the-Need-for-Professional-Plumbers-in-Arlington-TX.jpg" />
  <Card.Body>
    <Card.Title>Plumbers</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
</Card>

<br></br>

<Card>
  <Card.Img variant="top" src="https://lh6.googleusercontent.com/proxy/eqk0SsSzhBhWgyXN-xvU9kLayzfvDRANd8FE68_0YtzJAKJCabzHWUwy6C9s73zLoCrXF1ttnAlJHOc6iG70SbRy4KTXozCAFeLkG4pjUO5vr71JLSg1c6EitOscwUAID_iOhHVsI4xG_rvR-nk" />
  <Card.Body>
    <Card.Title>Cleaning</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
</Card>

<br></br>

<Card>
  <Card.Img variant="top" src="https://content1.jdmagicbox.com/comp/def_content/yoga_classes/default-yoga-classes-2.jpg" />
  <Card.Body>
    <Card.Title>Fitness and Yoga</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
</Card>


     </Card.Body>
      </Card>

   </Card.Body>
      </Card>

</div>

}
    </div>
    
  )
}

export  {Chome};