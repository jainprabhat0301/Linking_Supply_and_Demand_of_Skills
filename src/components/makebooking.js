import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form,FormGroup,Label,Input } from 'reactstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBBtn, MDBIcon,MDBFormInline,MDBInput} from "mdbreact";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Button,ButtonToolbar ,Card,Nav,NavDropdown,Navbar,FormControl,InputGroup } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Makebooking = ({db,servicename,servicedes,serviceprice,bdate,btime,selser,minTime,maxTime,getbookingdate,getbookingtime,
                      getbookingaddress,createbooking,fromdatepicker,startDate,setStartDate}) => {
    return(
      <div>
<Card>
    <Card.Body>
    {/* <p className="h2 text-center " style={{color:'black'}} >BOOK SERVICE </p> */}

<Card>
  <Card.Img variant="top" src="https://www.lifeandexperiences.com/wp-content/uploads/2019/07/professional-electrician-1024x640.jpg" />
  <Card.Body>
    <Card.Title>Electritian</Card.Title>
    <Card.Text>
    {/* <p>Service : {servicename}</p>      only for ppt     */}
          <p>Description : {servicedes}</p> 
          <p>Price : Rs {serviceprice}</p> 
          
              </Card.Text>

          Date<br/>
          <DatePicker
      selected={fromdatepicker}
 onChange={(e)=>getbookingdate(e)}     
  minDate={new Date()}
  dateFormat="MMMM d, yyyy"
      //maxDate={addDays(new Date(), 5)}
      placeholderText="Select a date"
    />
<br/><br/>


Time<br/>

{console.log("startDate",startDate)}
          <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
           minTime={minTime}
       maxTime={maxTime}
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
            <br/><br/>
          <Form>
     
    

      <FormGroup>
        <Label for="exampleTime">Address</Label>
        <Input
          type="text"
          name="time"
          id="exampleTime"
          placeholder="Enter address"  onChange={(e)=>getbookingaddress(e)}
        />
      </FormGroup>

      </Form>

    
  </Card.Body>
</Card>

<br></br>

<Link to='/chome'>  <MDBBtn onClick={()=>createbooking()} >Book</MDBBtn></Link>
<Link to='/chome'>  <MDBBtn  >Cancel</MDBBtn></Link>

</Card.Body>
</Card>


        
        <br></br>
       
    </div>
    
  )
}

export  {Makebooking};


{/* <FormGroup>
<Label for="exampleDate">Date</Label>
<Input
  type="date"
  name="date"
  onSelect
  id="exampleDate"
  placeholder="date placeholder" 
  
  //onChange={(e)=>getbookingdate(e)}
/>
</FormGroup> 

  <FormGroup>
        <Label for="exampleTime">Time</Label>
        <Input
          type="time"
          name="time"
          id="exampleTime"
          
          placeholder="time placeholder"  onChange={(e)=>getbookingtime(e) }
        />
      </FormGroup>

*/}