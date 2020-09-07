import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Button,ButtonToolbar ,Form,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Register = ({getsignupemail,getsignuppass,emailSignUp,getname,getcity,getstate,createpro,createcustomer,
                  getusertype,createuser}) => {
    return(
      <div>
               

<Card >
  <Card.Body>
    
<Card >
  <Card.Body>
  <p className="h2 text-center " style={{color:'black'}} >REGISTER</p>
    <Form>

    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="enter name"  onChange={(e)=>getname(e)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="enter state"  onChange={(e)=>getstate(e)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="enter city"  onChange={(e)=>getcity(e)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com"  onChange={(e)=>getsignupemail(e)} />
  </Form.Group>

  

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="enter password" onChange={(e)=>getsignuppass(e)} />
  </Form.Group>

  <Form.Group controlId="Customer">
    <Form.Check type="radio" defaultChecked label="Customer" name="radio1"  value="c"
  onClick={(e)=>getusertype(e)}/>
  </Form.Group>

  <Form.Group controlId="Professional">
    <Form.Check type="radio" label="Professional" name="radio1"  value="p" 
  onClick={(e)=>getusertype(e)} />
  </Form.Group>


       <div className='container d-flex justify-content-center'>
  <Link to="/login"><Button  variant="primary"  onClick={()=>{emailSignUp();createuser()}} >Register</Button></Link>
</div>
{/* onClick={()=>{setupdatequiz();clearquiz()}} */}
  <p className="h6 text-center py-4" style={{color:'black'}} >Already have an account? 
   <Link to="/login" style={{color:'blue'}} > Login</Link> </p>

  </Form>

  </Card.Body>
</Card>

  </Card.Body>
</Card>

                </div>
  )
}


export {Register};