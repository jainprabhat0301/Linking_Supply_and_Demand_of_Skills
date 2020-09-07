import React, { Fragment } from "react";
import '../App.css'
import { Button,ButtonToolbar ,Form,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Login = ({utype,useremail,googleLogin,getemail,getpass ,emailSignIn,getusertype}) => {
    return (
    
        <div>
               

        <Card >
          <Card.Body>
            
        <Card >
          <Card.Body>
          <p className="h2 text-center " style={{color:'black'}} >LOGIN</p>
            <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>getemail(e)}/>
          </Form.Group>
        
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password" onChange={(e)=>getpass(e)}/>
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
{utype=="c"
  ? <Link to="/chome"><Button  variant="primary" onClick={()=>emailSignIn()} >Login</Button></Link>
  : <Link to="/phome"><Button  variant="primary" onClick={()=>emailSignIn()} >Login</Button></Link>
        }
            </div>

          <br></br>

          {/* <p className="h6 text-center py-4 " style={{color:'black'}} >Or login with</p>

          <div className='container d-flex justify-content-center'>
             <Button  variant="danger" onClick={()=>googleLogin()} >Google</Button>
          </div> */}
         
          <p className="h6 text-center py-4" style={{color:'black'}} >Not a member? 
          <Link to="/register"  style={{color:'blue'}} >Sign Up</Link></p>

          
        
          </Form>
        
          </Card.Body>
        </Card>
        
          </Card.Body>
        </Card>
        
                        </div>
    )
};
export {Login};