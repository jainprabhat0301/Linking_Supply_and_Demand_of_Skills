import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import {Card,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { MDBInput } from "mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Addservice = ({categorylist,subcategorylist,servicenamelist,getcategory,
  getsubcategory,getservicename,getservicedes,getserviceprice,createservice,onClickHandler,onChangeHandler}) => {
    return(
      // servicename,servicedes,serviceprice

  <div>
               

<Card >
  <Card.Body>
    
<Card >
  <Card.Body>
  <p className="h2 text-center " style={{color:'black'}}  >Add Service</p>

{/* Category <br></br>
        <select className="browser-default custom-select" onChange={(e)=>getcategory(e)} >
          <option>Choose your option</option>
          {categorylist.map((c,index)=> <option value={c} > {c}</option> )} 
        </select>

<br></br><br></br> */}
     
{/* Subcategory <br></br>
  <select className="browser-default custom-select" onChange={(e)=>getsubcategory(e)} >
          <option>Choose your option</option>
          {subcategorylist.map((c,index)=> <option value={c} > {c}</option> )} 
        </select>

<br></br><br></br> */}



Service Name <br></br>
  <select className="browser-default custom-select" onChange={(e)=>getservicename(e)} >
  <option>Choose your option</option>
          {servicenamelist.map((c,index)=> <option value={c} > {c}</option> )} 
        </select>

<br></br><br></br>


<Form>

  {/* <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="enter service name"  onChange={(e)=>getservicename(e)}   />
  </Form.Group> */}

{/* <MDBInput type="textarea" label="Description" background /> */}

<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="enter service description"  onChange={(e)=>getservicedes(e)}  />
  </Form.Group>  

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="enter price"  onChange={(e)=>getserviceprice(e)} />
  </Form.Group>

     
  <input type="file" name="file" onChange={(e)=>onChangeHandler(e)}/>
   <button type="button" class="btn btn-success btn-block" onClick={()=>onClickHandler()}>Upload</button> 


  <Link to='/phome'><Button  variant="success" onClick={()=>createservice()} >Add</Button></Link>&nbsp;&nbsp;
  <Link to='/phome'><Button  variant="warning">Cancel</Button> </Link>

  </Form>

  </Card.Body>
</Card>

  </Card.Body>
</Card>

  </div>
  )
}



export {Addservice};