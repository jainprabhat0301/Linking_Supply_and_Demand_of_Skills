import React, { Fragment } from "react";
import '../App.css'
import Image from 'react-bootstrap/Image'
 import { Button,ButtonGroup,ButtonToolbar ,Card,Col,Row,Container,CardDeck,CardColumns,CardGroup,Nav,NavDropdown,Navbar,InputGroup } from 'react-bootstrap';
//import {Form,FormControl} from 'react-bootstrap';
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListGroup from 'react-bootstrap/ListGroup'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Form,Input } from 'antd';


const Test = ({logOut,testing,subcategory,category,people,res,searchHandler,getsearchitem,getservicename,listdata,getlistdata,
              getcard,onChangeHandler,onClickHandler,image}) => {
    return (
    
        <div>
               

        <Card >
          <Card.Body>
            
        <Card >
          <Card.Body>
          <Link to="/chome"><Button  variant="primary"  >Customer Home</Button></Link> &nbsp;
          <Link to="/phome"><Button  variant="primary"  >Professoinal Home</Button></Link> &nbsp;
          <Link to="/login"><Button  variant="primary"  >Login</Button></Link> &nbsp;
          <Link to="/register"><Button  variant="primary"  >Register</Button></Link> &nbsp;
          <Link to="/addservice"><Button  variant="primary"  >Add Service</Button></Link> &nbsp;
          <Link to="/myservice"><Button  variant="primary"  >My Service</Button></Link> &nbsp;
          <Link to="/selservice"><Button  variant="primary"  >Select Service</Button></Link> &nbsp;
          <Link to="/"><Button  variant="primary" onClick={()=>logOut()} >Logout</Button></Link> &nbsp;
          <Link to="/"><Button  variant="primary" onClick={()=>testing()} >Testing </Button></Link> &nbsp;

{/* 
          <Form>
     <Form.Item label="Image">
       <Input placeholder="Image" id="image" onChange={(e)=>onChangeHandler(e)} />
     </Form.Item>
    </Form> */}

         
          <input type="file" name="file" onChange={(e)=>onChangeHandler(e)}/>
          <button type="button" class="btn btn-success btn-block" onClick={()=>onClickHandler()}>Upload</button> 

<br></br>
{console.log("image in testing",image)}
{/* <Image src={image} rounded /> */}


<Card> 
<Card.Body>
     
      <Card>
  <Card.Body>
  <Card.Img variant="top" src={image}  />
 
    {/* <Card.Title>Electritian</Card.Title> */}
    <Card.Text>
    {/* <p>Service : {b.servicename}</p> */}
           </Card.Text>
  </Card.Body>
</Card>

</Card.Body>
      </Card> 
        

       {/* <ul>

     {res.map((person,index)=><li> <Button value={person} onClick={(person)=>getsearchitem(person)} >{person} </Button> </li>)} 
      
      <ListGroup>
      {res.map((person,index)=><ListGroup.Item><ButtonGroup vertical>
<Button value={person} onClick={(person)=>getsearchitem(person)} >{person} </Button></ButtonGroup></ListGroup.Item>)}
</ListGroup> 
</ul> */}

 {/* servicelist:["Salon at Home","Massage at Home","Appliances & Electronics Repair","Cleaning","Electritian","Plumber","Carpenter","Fitness & Yoga"] */}
    
    {/* onChange={(e)=>getservice(e)} value={service_name} */}

<select className="browser-default custom-select" onChange={(e)=>getservicename(e)} >
          <option>Choose your option</option>
          <option value={0} > Salon at Home</option>
            <option value={1}> Massage at Home</option>
            <option value={2}> Appliances and Electronics Repair</option>
            <option value={3}> Cleaning</option>
            <option value={4}> Electritian</option>
            <option value={5}> Plumber</option>
            <option value={6}> Carpenter</option>
            <option value={7}> Fitness and Yoga</option>
        </select>

{/* 
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="search"  onChange={(e)=>searchHandler(e)} />
  </Form.Group>
  </Form>

<ButtonGroup vertical>
{res.map((person,index)=> <Button value={person} onClick={(person)=>getsearchitem(person)} >{person} </Button>)} 
  </ButtonGroup> */}

  {/* <ListGroup>
  <ListGroup.Item onClick={(value)=>getlistdata(value)} value={234654}>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> */}

{/* <ul>
  <li onClick={(value)=>getlistdata(value)} value={234654}>hello</li>
  <li onClick={(value)=>getlistdata(value)} value={2}>hello</li>
  <li onClick={(value)=>getlistdata(value)} value={3}>hello</li>
  <li onClick={(value)=>getlistdata(value)} value={4}>hello</li>

</ul>

<ul class="list-group">
  <li class="list-group-item" onClick={(value)=>getlistdata(value)} value={234654}>Cras justo odio</li>
  <li class="list-group-item" onClick={(value)=>getlistdata(value)} value={234654}>Dapibus ac facilisis in</li>
  <li class="list-group-item" onClick={(value)=>getlistdata(value)} value={234654}>Morbi leo risus</li>
  <li class="list-group-item" onClick={(value)=>getlistdata(value)} value={234654}>Porta ac consectetur ac</li>
  <li class="list-group-item" onClick={(value)=>getlistdata(value)} value={234654}>Vestibulum at eros</li>
</ul> */}

{/* 
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="search"  onChange={(e)=>searchHandler(e)} />
  </Form.Group>
  </Form> */}
        
  <ul className="list-group">
  
  {res.map((p,index)=> <li className="list-group-item" onClick={(value)=>getlistdata(value)} value={index}>{p}</li>)} 
</ul>
{/* <Button value={person} onClick={(person)=>getsearchitem(person)} > </Button> 
onClick={(value)=>getlistdata(value)} value={234654} */}

 {/* servicelist:["Salon at Home","Massage at Home","Appliances & Electronics Repair","Cleaning","Electritian","Plumber","Carpenter","Fitness & Yoga"] */}



 

    {/* <Card >
    <Container>
  <Row>

  <Col >
  <Card.Body>
    <Card.Title>Electritian</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
   </Col>

   <Col>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  </Col>
  </Row>
</Container>
</Card> */}



 {/* <Card>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  <Card.Body>
    <Card.Title>Electritian</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
    <MDBBtn onClick={(value)=>getcard(value)} value={"Electrition"}>Select</MDBBtn>
  </Card.Body>
</Card> */}


{/* <MDBCol>
      <MDBCard >
        <MDBCardImage className="img-fluid" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" waves  />
        <MDBCardBody>
          <MDBCardTitle>Electritian</MDBCardTitle>
          <MDBCardText>
            Doorstep Repair | Reliable Electritian | Post Service Gaurantee
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol> */}


{/*     
<Container>
  <Row>
    <Col>
    <Card>
  <Card.Img variant="top" src="https://benjaminfranklinplumbingfortworth.com/wp-content/uploads/2017/07/Realizing-the-Need-for-Professional-Plumbers-in-Arlington-TX.jpg" />
  <Card.Body>
    <Card.Title>Plumbers</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    <Col>
    <Card>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  <Card.Body>
    <Card.Title>Electritian</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>

<br></br>

<Container>
  <Row>
    <Col>
    <Card>
  <Card.Img variant="top" src="https://lh6.googleusercontent.com/proxy/eqk0SsSzhBhWgyXN-xvU9kLayzfvDRANd8FE68_0YtzJAKJCabzHWUwy6C9s73zLoCrXF1ttnAlJHOc6iG70SbRy4KTXozCAFeLkG4pjUO5vr71JLSg1c6EitOscwUAID_iOhHVsI4xG_rvR-nk" />
  <Card.Body>
    <Card.Title>Cleaning</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    <Col>
    <Card>
  <Card.Img variant="top" src="https://content1.jdmagicbox.com/comp/def_content/yoga_classes/default-yoga-classes-2.jpg" />
  <Card.Body>
    <Card.Title>Fitness and Yoga</Card.Title>
    <Card.Text>
    Doorstep Repair | Reliable Electritian | Post Service Gaurantee
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container> */}


{/* <select className="browser-default custom-select" onChange={(e)=>testing(e)} >
          <option>Choose your option</option>
          {category.map((c,index)=> <option value={c} > {c}</option> )} 
       
        </select>

        
<select className="browser-default custom-select" onChange={(e)=>testing(e)} >
          <option>Choose your option</option>
          {subcategory.map((c,index)=> <option value={c} > {c}</option> )} 
      
        </select> */}


          </Card.Body>
        </Card>


        
          </Card.Body>
        </Card>


       

        
                        </div>
    )
};
export {Test};


{/* <Form>
          
  <FormGroup>
     <h4>  <Label for="exampleSelect"> <i class="fas fa-check-square"></i> Name</Label></h4>
          <Input type="select" name="correct" id="exampleSelect" required onChange={(e)=>getservicename(e)}  >
          <option > Choose Option</option>
            <option value={0} > Salon at Home</option>
            <option value={1}> Massage at Home</option>
            <option value={2}> Appliances and Electronics Repair</option>
            <option value={3}> Cleaning</option>
            <option value={4}> Electritian</option>
            <option value={5}> Plumber</option>
            <option value={6}> Carpenter</option>
            <option value={7}> Fitness and Yoga</option>



          </Input>
        </FormGroup>
        </Form> */}