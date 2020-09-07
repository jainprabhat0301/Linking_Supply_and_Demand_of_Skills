


// // -------Begin  import React----------------//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";
// import { browserHistory } from 'react-router';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './App.css';
// //import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// // ------- End import React----------------//


// // -------Begin  import component files ----------------//
// import {Login} from './components/login';
// import {Addservice} from './components/addservice';
// import { Register } from './components/register';
// import { Phome } from './components/phome';
// import { Chome } from './components/chome';
// import { Makebooking } from './components/makebooking';
// import { Mybooking } from './components/mybooking';
// import { Test } from './components/testing';
// import { Myprofile} from './components/myprofile';
// import { Myservice} from './components/myservice';

// // ------- End import components files----------------//



// // -----------------import Database Connections----------//
// import axios from 'axios' 
// // -----------------import Database Connections----------//



// // -----------------Start import Firebase Connections----------//

// import * as firebase from "firebase/app";
// import "firebase/auth";

//  const firebaseConfig = {
//   apiKey: "AIzaSyCKYa-hc6DigfBLwE0hEtNuBYuv47sy5a4",
//   authDomain: "skill-aa7b4.firebaseapp.com",
//   databaseURL: "https://skill-aa7b4.firebaseio.com",
//   projectId: "skill-aa7b4",
//   storageBucket: "skill-aa7b4.appspot.com",
//   messagingSenderId: "1049368528580",
//   appId: "1:1049368528580:web:177b589093a91df7eceb91",
//   measurementId: "G-NM7R9JFGYM"
// };
// firebase.initializeApp(firebaseConfig);  // Initialize Firebase

// // -----------------End import Firebase Connections----------//




// class App extends React.Component {   // ---------  App Class -------------//
//   constructor(props){
//     super(props)
//     this.state= {uid:"",image:"",servicename:"",servicedes:"",serviceprice:"",useremail:"",user:"",signupemail:"",signuppass:"", uemail:"",upass:"",
//                   uname:"",ucity:"",ustate:"",utype:"c",selser:{servicename:"Driver",servicedes:"Driving Car",serviceprice:"20000"},
//                 bdate:"",btime:"",baddress:"",pemail:"",cemail:"",book:"",fromdatepicker:new Date(),fromtimepicker:new Date(),
//               startDate:"",search:"",res:[],servicelist:["Salon at Home","Massage at Home","Appliances & Electronics Repair",
//               "Cleaning","Electritian","Plumber","Carpenter","Fitness & Yoga"],listdata:"",minTime:"",maxTime:""
//               ,category:"",subcategory:"",categorylist:["Cleaning","Women's Beauty","Tutors"], subcategorylist:[],servicenamelist:[],cleaning:["House Cleaning","Washroom Cleaning","Aquarium Cleaning"],house:["Tiles Cleaning","Dusting and Straightening","Washroom Clean","Aqua"],c:["c1","c2","c3"],
//                 tutor:["Pre-Primary","Primary","High School","College"],pre_primary:["Pre-Primary"],primary:["Primary Languages","Mathematics","Science"],
//                 high_school:["Mathematics For High School","Biology","English","Physics","Chemistry","Languages"],
//                 college:["Physics For College","Chemistry For College","English For College","Mathematics For College","College Biology",,"College Languages"],
//                 selectedFile: null,
             
//      people:[
//       {
//         id:1,
//         first:"Sarah"
//       },
//       {
//         id:2,
//         first:"Pradeep"
//       },
//       {
//         id:3,
//         first:"Jony"
//       },
//       {
//         id:4,
//         first:"Nishu"
//       },
//       {
//         id:5,
//         first:"Prabhat"
//       },
//     ]
//   }
    

//     this.state.db={

//       pservice:[{servicename:"Driver",servicedes:"Driving Car",serviceprice:"20000"},
//       {servicename:"Driver",servicedes:"Driving Car",serviceprice:"20000"},
//       {servicename:"Driver",servicedes:"Driving Car",serviceprice:"20000"},
//       {servicename:"Driver",servicedes:"Driving Car",serviceprice:"20000"},
//       {servicename:"Driver",servicedes:"Driving Car",serviceprice:"20000"}],
//       cservice:[],
//       pbooking:[],
//       cbooking:[],
      
//     }

//   }
//   //----------------Start componentDidMount Functions------------//
//   componentDidMount(){
//     //---------------------- Check Auth------------------//
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {

//         let useremail=this.state.useremail
//         useremail=user.email
//         let uid=user.uid
//        // console.log("user.uid",user.uid)
//         this.setState({
//           user:user,useremail:useremail,uid:uid,
//         })

//         axios.get("http://localhost:8081/photos?uid="+uid).then(
//           (res)=>{
//           //  let db = this.state.db;
//           console.log("get image from db",res.data) 
//           console.log("new image",res.data[5].imagepath)
//           let image=res.data[5].imagepath
//          // db.photos = res.data;
//             this.setState({
//               image:image
//             })
//             }
//         )

//               // http://localhost:8081
//         axios.get('http://localhost:8081/getuser/'+this.state.useremail).then((res)=>
//         {
//           console.log("get user api",res.data)
//           let userobj=res.data
//               let useremail=userobj.uemail
//               let uname=userobj.uname
//               let ucity=userobj.ucity
//               let ustate=userobj.ustate
//               let utype=userobj.utype
//               this.setState({
//                 useremail:useremail,uname:uname,ucity:ucity,ustate:ustate,utype:utype
//               })

//               if (this.state.utype=="p") {
//                 axios.get('http://localhost:8081/pservice/'+this.state.useremail).then((res)=>
//           {
//             console.log("get professional own services ",res.data)
//             let db=this.state.db
//             db.pservice=res.data
//                 this.setState({db:db})
//           })
//           }

//           else if (this.state.utype=="c") {
//             // axios.get('http://localhost:8081/cservice/'+this.state.ucity).then((res)=>
//             // {
//             //   console.log("get customer services",res.data)
//             //   let db=this.state.db
//             //   db.cservice=res.data
//             //       this.setState({db:db})
//             // })
//           } 

//         })


//         //this.props.history.push('/')  
//         console.log("logged in",user)
//       } else {
//         this.setState({
//           user:null
//         })
//         console.log("logged out")
//       }
//     });

//     //next function

//   }

//   //----------------End componentDidMount Functions------------//

//       //----------------Start Authentication Functions------------//

//   googleLogin(){
//     var provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider).then((result) => {
//       var token = result.credential.accessToken;
//       var user = result.user;
        
//       let useremail=this.state.useremail
//       useremail=user.email
//       this.setState({
//         user:user,useremail:useremail,
//       })
//       this.props.history.push('/')
//     //  console.log(user.displayName,user.email);
//       console.log("user",this.state.user)

//     }).catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       var email = error.email;
//       var credential = error.credential;
//     });
//   }

//   logOut(){
//     firebase.auth().signOut().then(() => {
//        this.setState({
//          user:null ,useremail:null,uname:null,ucity:null,ustate:null,utype:"c"
//        })
//        console.log("signout")
       
//       }).catch(function(error) {
// console.log(error)    
//   });
//   }

//   emailSignUp=()=>{
//     const email=this.state.signupemail;
//     const pass=this.state.signuppass;
//     firebase.auth().createUserWithEmailAndPassword(email, pass).then((result)=>{
//     // The signed-in user info.
//     var user = result.user;
  
//     let useremail=this.state.useremail
//     useremail=user.email
//     this.setState({
//       user:user,useremail:useremail})
//     console.log("email signup",user.email);
//     // ...
//   //  this.props.history.push('/')  

//   if (this.state.utype=="c") {
//     axios.get('http://localhost:8081/cservice/'+this.state.ucity).then((res)=>
//     {
//       console.log("get customer services",res.data)
//       let db=this.state.db
//       db.cservice=res.data
//           this.setState({db:db})
//     })
//   } 

//     })
//     .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//     } else {
//     alert(errorMessage);
//     }
//     console.log(error);
//     });
//     }
    
//     emailSignIn=()=>{
//     const email=this.state.uemail;
//     const pass=this.state.upass;
//     console.log("email",email)
//     console.log("pass",pass)
//     firebase.auth().signInWithEmailAndPassword(email, pass).then((result)=>{
//     // The signed-in user info.
//     var user = result.user;
  
//     let useremail=this.state.useremail
//     useremail=user.email
//     console.log("email signin",user.email);
//     this.setState({
//       user:user,useremail:useremail})
//       //this.props.history.push('/')  
//     // ...

//     if (this.state.utype=="p") {
//           axios.get('http://localhost:8081/pservice/'+this.state.useremail).then((res)=>
//     {
//       console.log("get user api",res.data)
//       let db=this.state.db
//       db.pservice=res.data
//           this.setState({db:db})
//     })
//     }

//     else if (this.state.utype=="c") {
//       // axios.get('http://localhost:8081/cservice/'+this.state.ucity).then((res)=>
//       // {
//       //   console.log("get customer services",res.data)
//       //   let db=this.state.db
//       //   db.cservice=res.data
//       //       this.setState({db:db})
//       // })
//     } 
//     // axios.get('http://localhost:8081/getuser/'+this.state.useremail).then((res)=>
//     // {
//     //   console.log("get user api",res.data)
//     //   let userobj=res.data
//     //       let useremail=userobj.uemail
//     //       let uname=userobj.uname
//     //       let ucity=userobj.ucity
//     //       let ustate=userobj.ustate
//     //       let utype=userobj.utype
//     //       this.setState({
//     //         useremail:useremail,uname:uname,ucity:ucity,ustate:ustate,utype:utype
//     //       })
//     // })

//     })
//     .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     if (errorCode === 'auth/wrong-password') {
//     alert('Wrong password.');
//     } else {
//     alert(errorMessage);
//     }
//     console.log(error);
//     // ...
//     });
//     }
//       //----------------End Authentication Functions------------//


//   //------------Start get input functions---------//
//     getsignupemail(e){
//       let signupemail=this.state.signupemail
//       signupemail=e.target.value
//       this.setState({signupemail:signupemail})
//     }
    
//     getsignuppass(e){
//       let signuppass=this.state.signuppass
//       signuppass=e.target.value
//       this.setState({signuppass:signuppass})
//     }

//     getemail(e){  
//       let uemail=this.state.uemail
//       uemail=e.target.value
//       this.setState({uemail:uemail})
//     }
    
//     getpass(e){
//       let upass=this.state.upass
//       upass=e.target.value
//       this.setState({upass:upass})
//     }


  


//   getsubcategory(e)  //-------Take service name----------//
//   {
//     var servicename=e.target.value
//     this.setState({ servicename:servicename });
//     console.log(servicename);
//   }

 
//   getcategory(e)  //----------------- Get Category ----------//category:["Cleaning","Women's Beauty","Tutors"]
//   {
//     var category=e.target.value
//     this.setState({category:category})
//     let subcategorylist=[]
//     console.log(category);
//     if (category=="Cleaning") {
//       subcategorylist=this.state.cleaning
//     }
//     else if (category=="Tutors") {
//       subcategorylist=this.state.tutor

//     } else {
//       subcategorylist=this.state.c

//     }
//      this.setState({subcategorylist:subcategorylist})
//   }


//   getsubcategory(e)  //----------------- Get Subcategory ----------//
//   {
//     var servicename=e.target.value
//     console.log(servicename);
//     let servicenamelist=[]

//     if (servicename=="Pre-Primary") {
//       servicenamelist=this.state.pre_primary
//     }
//     else if (servicename=="Primary") {
//       servicenamelist=this.state.primary

//     } 
//     else if (servicename=="High School") {
//       servicenamelist=this.state.high_school

//     } 
//     else if (servicename=="College") {
//       servicenamelist=this.state.college

//     } 
//     else {
//       servicenamelist=this.state.c

//     }
//      this.setState({servicenamelist:servicenamelist})
//   }

//   getservicename(e)  //-------Take service name----------//
//   {
//     var servicename=e.target.value
//     //this.setState({ servicename:servicename });
//     console.log(servicename);
//   }

  
//   getservicedes(e)
//   {
//     var servicedes=e.target.value
//     this.setState({ servicedes:servicedes });
//     console.log(servicedes);
//   }

//   getserviceprice(e)
//   {
//     var serviceprice=e.target.value
//     this.setState({ serviceprice:serviceprice });
//     console.log(serviceprice);
//   }

//   getname(e){
//     let uname=this.state.uname
//     uname=e.target.value
//     this.setState({uname:uname})
//   }

//   getcity(e){
//     let ucity=this.state.ucity
//     ucity=e.target.value
//     this.setState({ucity:ucity})
//   }

//   getstate(e){
//     let ustate=this.state.ustate
//     ustate=e.target.value
//     this.setState({ustate:ustate})
//   }


//   getusertype(e){
//     let utype=this.state.utype
//     utype=e.target.value
//     this.setState({utype:utype})
//     console.log(this.state.utype)

//   }


//   getbookingdate(e)
//   {
//     let fromdatepicker=e
//     this.setState({fromdatepicker:fromdatepicker})
//   //  console.log("e",e.getDate())

//     // let bdate=this.state.bdate
//     // bdate=e.target.value
//     // //let fromdatepicker=e.target.value
//      console.log("fromdatepicker",fromdatepicker)
//       let  year = fromdatepicker.getFullYear();
//       let  day = fromdatepicker.getDate();
//       let month=fromdatepicker.toLocaleString('default', { month: 'long' })
//       let bdate = month+" "+day+", "+year

//     // console.log(day,month,year)
//      this.setState({bdate:bdate})
//     // console.log(typeof this.state.bdate);
//      console.log(bdate)
//   }

  
//   getbookingtime(e)
//   {
// //console.log("e",e)
//     let fromtimepicker=e

//   //   var hours = e.getHours();
//   // var minutes = e.getMinutes();
//   // var ampm = hours >= 12 ? 'PM' : 'AM';
//   // hours = hours % 12;
//   // hours = hours ? hours : 12; // the hour '0' should be '12'
//   // minutes = minutes < 10 ? '0'+minutes : minutes;
//   // var strTime = hours + ':' + minutes + ' ' + ampm;
//   //let fromtimepicker=strTime
//  // console.log(fromtimepicker)
//     this.setState({fromtimepicker:fromtimepicker})
//    // console.log("inside getbookingtime fromtimepicker",this.state.fromtimepicker)
//   console.log(fromtimepicker)

//     let btime=this.state.btime
//     btime=e.target.value
   
//     this.setState({btime:btime})
//     console.log(typeof this.state.btime);
//     console.log(this.state.btime)
//   }

 
//   getbookingaddress(e)
//   {
//     let baddress=this.state.baddress
//     baddress=e.target.value
   
//     this.setState({baddress:baddress})
//     console.log(typeof this.state.baddress);
//     console.log(this.state.baddress)
//   }

//   selectservice(b)
//   {
//     this.state.book=b
//    // let fromdatepicker=new Date()
//    // let fromtimepicker=new Date()
//   // ,fromtimepicker:fromtimepicker
//   //console.log("inside selectservice fromtimepicker",fromtimepicker)


//  //   this.setState({fromdatepicker:fromdatepicker})
//     console.log("inside selectservice")
//     console.log("book",this.state.book)
//     console.log("b.servicename",b.servicename)
//     let servicename=b.servicename
//     let servicedes=b.servicedes
//     let serviceprice=b.serviceprice
//     let pemail=b.pemail    
//     this.setState({servicename:servicename,servicedes:servicedes,serviceprice:serviceprice,pemail:pemail})

//     let minTime=this.state.minTime
//     let d=new Date()

//     d.setHours(9)
//     d.setMinutes(0)
//     minTime=d

//     let maxTime=this.state.maxTime
//     let d1=new Date()
    
//     d1.setHours(19)
//     d1.setMinutes(0)
//     maxTime=d1
//     this.setState({minTime:minTime,maxTime:maxTime,startDate:minTime})
//     console.log("minTime",minTime)

//   }

//   setStartDate(date){   //---------------   To get time------------------//
//     let startDate=date
    
//     this.setState({startDate:startDate,})

//        var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0'+minutes : minutes;
//   var strTime = hours + ':' + minutes + ' ' + ampm;

//     let btime=this.state.btime
//     btime=strTime
   
//     this.setState({btime:btime})
//     console.log(typeof this.state.btime);
//     console.log(this.state.btime)
//   }

//   searchHandler(e)
//   {
//     let search=e.target.value
//     let people=this.state.people
//     let servicelist=this.state.servicelist
//     let res=[]

//     if (search=="") {
//       res=[]
//     }
//     else
//     {
//     for(var i=0;i<servicelist.length;i++)
//     {
//       if (servicelist[i].toLowerCase().includes(search.toLowerCase()) || servicelist[i].includes(search) ) 
//       {
//         res.push(servicelist[i])
//       }
//     }
//   }
//     console.log(res)
//     this.setState({res:res})
     
//   }



//   getsearchitem(e){
//     let res=this.state.res
//     let index=e.target.value
//     console.log(res[index])
//     let search=res[index]
//     axios.get('http://localhost:8081/particularservice/'+this.state.ucity+'/'+search).then((res)=>
//     {
//       console.log("get particular services",res.data)
//       let db=this.state.db
//       db.cservice=res.data
//       this.setState({db:db})
     
//     })

//     res=[]
//     this.setState({res:res})
//   }

//   getlistdata(e){
//     let listdata=e.target.value
//     this.setState({listdata:listdata})
//     console.log(listdata)
//     console.log(this.state.res[listdata])

//   }

//   getcard(e){
//     console.log(e.target.value)
//     let search=e.target.value
//     axios.get('http://localhost:8081/particularservice/'+this.state.ucity+'/'+search).then((res)=>
//     {
//       console.log("get particular services",res.data)
//       let db=this.state.db
//       db.cservice=res.data
//       this.setState({db:db})
     
//     })

//   }




//   //------------End get input functions---------//

//   //------------Begin Store data in database functions------------//

//   createuser(){
//     let obj={uemail:this.state.signupemail,uname:this.state.uname,ucity:this.state.ucity,ustate:this.state.ustate,
//             utype:this.state.utype}
//     axios.post('http://localhost:8081/user/',obj)
//   .then((res)=>{
//   console.log("response from database",res.data)
//    })  

//   }

//   createservice(){
//     let db=this.state.db
//     let obj={pemail:this.state.useremail,pname:this.state.uname,pcity:this.state.ucity,pstate:this.state.ustate,
//       servicename:this.state.servicename,servicedes:this.state.servicedes,serviceprice:this.state.serviceprice}
//       axios.post('http://localhost:8081/service/',obj)
//       .then((res)=>{
//       console.log("response from database",res.data)
//        })  
//     db.pservice.push(obj)
//     console.log(db.pservice)
  
//   }

//   createpro(){
//     let obj={pemail:this.state.signupemail,pname:this.state.uname,pcity:this.state.ucity,pstate:this.state.ustate}
//     axios.post('http://localhost:8081/professional/',obj)
//   .then((res)=>{
//   console.log("response from database",res.data)
//    })  

//   }

//   createcustomer(){
//     let obj={cemail:this.state.signupemail,cname:this.state.uname,ccity:this.state.ucity,cstate:this.state.ustate}
//     axios.post('http://localhost:8081/customer/',obj)
//   .then((res)=>{
//   console.log("response from database",res.data)
//    })  
//   }


//   createbooking(){
//     let obj={pemail:this.state.pemail,cemail:this.state.useremail,
//       servicename:this.state.servicename,servicedes:this.state.servicedes,serviceprice:this.state.serviceprice,
//     bdate:this.state.bdate,btime:this.state.btime,baddress:this.state.baddress}
//       axios.post('http://localhost:8081/booking/',obj)
//       .then((res)=>{
//       console.log("response from database",res.data)
//        })  

//   }



//     //------------End Store data in database functions------------//

//   //------------Begin Retrieve data in database functions------------//



 

//   getpbooking(){

// axios.get('http://localhost:8081/getpbooking/'+this.state.useremail).then((res)=>
//     {
//       console.log("get professional booking",res.data)
//       let db=this.state.db
//       db.pbooking=res.data
//           this.setState({db:db})
//     })
//   }

//   getcbooking(){

//     axios.get('http://localhost:8081/getcbooking/'+this.state.useremail).then((res)=>
//         {
//           console.log("get Customer booking",res.data)
//           let db=this.state.db
//           db.cbooking=res.data
//               this.setState({db:db})
//         })
//       }

//       testing(e){
      
//         console.log(e.target.value)
//         console.log(this.state.subcategory)
//         let subcategory=this.state.subcategory
//         let list=e.target.value
//         if (list=="a") {
//           subcategory=this.state.a
//         }
//         else if (list=="b") {
//           subcategory=this.state.b

//         } else {
//           subcategory=this.state.c

//         }
//          this.setState({subcategory:subcategory})

//       }

     
//       // <Input type="file" id="image" onChange={(e)=>{let fd = new FormData()
//       //   fd.append("avatar",e.target.files[0])
      
//       //    axios.post("/profile",fd,{headers:{
//       //     'Content-Type': "multipart/form-data"
//       //   }})}}
//     onChangeHandler(e){
//       console.log(e.target.files[0])
//       let fd = new FormData()
//       fd.append("avatar",e.target.files[0])
//       axios.post("http://localhost:8081/profile",fd,{headers:{
//            'Content-Type': "multipart/form-data"
//            }})
//       // let image=e.target.value
//       // this.setState({
//       //   image:image,
//       // })
//     }


//     onClickHandler = () => { 
//       let photo={uid:this.state.uid}

//       axios.post("http://localhost:8081/photo",photo).then(
//   (res)=>{
//      console.log("res from upload",res.data)
//      // this.props.history.push('/gallery')

//   }
// )
//       // const data = new FormData() 
//       // data.append('file', this.state.selectedFile)
//       // console.log(this.state.selectedFile)
//       // axios.post("http://localhost:8081/upload", data, { // receive two parameter endpoint url ,form data 
//       // })
//       // .then(res => { // then print response status
//       //   console.log(res.statusText)
//       // })
//   }

//   //------------End Retrieve data in database functions------------//


//   render() {
//     return (
//       <Router>
//       <div>
     
      
//      <Route path="/login" exact render={props=>
//      <Login {...props}  utype={this.state.utype} useremail={this.state.useremail} getusertype={this.getusertype.bind(this)}   
//        googleLogin={this.googleLogin.bind(this)} getemail={this.getemail.bind(this)}  getpass={this.getpass.bind(this)} 
//      emailSignIn={this.emailSignIn.bind(this)}
//     ></Login>}/>

//       <Route path="/register"  render={props=>
//      <Register {...props} getsignupemail={this.getsignupemail.bind(this)}
//      getsignuppass={this.getsignuppass.bind(this)}   emailSignUp={this.emailSignUp.bind(this)}
//      getname={this.getname.bind(this)}  getcity={this.getcity.bind(this)} 
//       getstate={this.getstate.bind(this)} getusertype={this.getusertype.bind(this)} 
//        createpro={this.createpro.bind(this)}  createcustomer={this.createcustomer.bind(this)}
//        createuser={this.createuser.bind(this)}

//       ></Register>}/>

// <Route path="/phome"  render={props=>
//      <Phome {...props} db={this.state.db}  useremail={this.state.useremail}  uname={this.state.uname}
//      ucity={this.state.ucity} ustate={this.state.ustate} utype={this.state.utype}
//        logOut={this.logOut.bind(this)}  
//      getpbooking={this.getpbooking.bind(this)}   
//       ></Phome>}/>

// <Route path="/myservice"  render={props=>
//      <Myservice {...props} db={this.state.db}  useremail={this.state.useremail}  uname={this.state.uname}
//        logOut={this.logOut.bind(this)}  
//      getpbooking={this.getpbooking.bind(this)}   
//       ></Myservice>}/>

// <Route path="/addservice"  render={props=>
//      <Addservice {...props} 
//      categorylist={this.state.categorylist}  subcategorylist={this.state.subcategorylist}  servicenamelist={this.state.servicenamelist} 
//   getservicename={this.getservicename.bind(this)}  getservicedes={this.getservicedes.bind(this)} 
//    getserviceprice={this.getserviceprice.bind(this)}   createservice={this.createservice.bind(this)}
//    getcategory={this.getcategory.bind(this)}    getsubcategory={this.getsubcategory.bind(this)}
 

//     ></Addservice>}/>
  
//   <Route path="/chome"  render={props=>
//      <Chome {...props}  db={this.state.db}  res={this.state.res} logOut={this.logOut.bind(this)}  
//      createbooking={this.createbooking.bind(this)}
//      getcbooking={this.getcbooking.bind(this)}    selectservice={this.selectservice.bind(this)}
//      getcbooking={this.getcbooking.bind(this)}    searchHandler={this.searchHandler.bind(this)}
//      getsearchitem={this.getsearchitem.bind(this)}       getcard={this.getcard.bind(this)}

//       ></Chome>}/>

// <Route path="/makebooking"  render={props=>
// <Makebooking {...props}  db={this.state.db} fromdatepicker={this.state.fromdatepicker} fromtimepicker={this.state.fromtimepicker} 
//        servicename={this.state.servicename}  servicedes={this.state.servicedes} minTime={this.state.minTime}
//        maxTime={this.state.maxTime}
//      serviceprice={this.state.serviceprice} bdate={this.state.bdate} btime={this.state.btime}   selser={this.state.selser} 
// getbookingdate={this.getbookingdate.bind(this)} getbookingtime={this.getbookingtime.bind(this)} getbookingaddress={this.getbookingaddress.bind(this)}
//      createbooking={this.createbooking.bind(this)}
//      startDate={this.state.startDate}
//       setStartDate={this.setStartDate.bind(this)} 
//       ></Makebooking>}/>


// <Route path="/mybooking"  render={props=>
//      <Mybooking {...props} db={this.state.db}  selser={this.state.selser} bdate={this.state.bdate}
//      btime={this.state.btime} utype={this.state.utype}   getcbooking={this.getcbooking.bind(this)}
//      getpbooking={this.getpbooking.bind(this)}
//       ></Mybooking>}/>


// <Route path="/myprofile"  render={props=>
//      <Myprofile {...props} db={this.state.db}  useremail={this.state.useremail} uname={this.state.uname}
//      ucity={this.state.ucity} ustate={this.state.ustate} utype={this.state.utype}
//      getcbooking={this.getcbooking.bind(this)}   getpbooking={this.getpbooking.bind(this)}
//       ></Myprofile>}/>

// <Route path="/" exact render={props=>
//      <Test {...props} startDate={this.state.startDate}  res={this.state.res}
//      people={this.state.people}
//      term={this.state.term}
//      listdata={this.state.listdata}
//      category={this.state.category}
//      subcategory={this.state.subcategory}
//      image={this.state.image}

//       getlistdata={this.getlistdata.bind(this)}
//      setStartDate={this.setStartDate.bind(this)} 
//       testing={this.testing.bind(this)}
//       searchHandler={this.searchHandler.bind(this)}
//       logOut={this.logOut.bind(this)}
//       getsearchitem={this.getsearchitem.bind(this)}
//       getservicename={this.getservicename.bind(this)}
//       getcard={this.getcard.bind(this)}
//       onChangeHandler={this.onChangeHandler.bind(this)}
//       onClickHandler={this.onClickHandler.bind(this)}

//       ></Test>}/>
//       </div>
//       </Router>
//     )
//   }
// }

// export default (App);



  