const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors=require("cors")
const bodyParser = require("body-parser") 
var multer = require('multer')
const path   = require('path');

//var upload = multer({ dest: 'uploads/' })

//--------------------MIDDLEWARES---------------------------------------------//

app.use(express.static('build'));  //----------------USED AT HOSTING ONLY -------------------//
app.use(express.static('uploads'))

app.use(bodyParser.json());   
app.use(bodyParser.urlencoded()) 
app.use(cors());

//-----Begin Mongo DB Connection ------//
//mongoose.connect('mongodb://localhost:27017/skill', {useNewUrlParser: true});

 mongoose
   .connect(
     "mongodb://localhost:27017/skill", {useNewUrlParser: true} 
   )
   .then(() => {
     console.log("Connected to database!");
   })
   .catch((error) => {
     console.log("Connection failed!");
     console.log(error);
   });
  
   //--------------------MONGO DB ATLAS CLOUD-----------------------//

// mongoose
//   .connect(
//     "mongodb+srv://Prabhat0301:jaiadinath@cluster0-arxx8.mongodb.net/test?retryWrites=true&w=majority",{dbName:'cluster0'}
//    // "mongodb+srv://Prabhat:9571923475@quiz-e1sh2.mongodb.net/test?retryWrites=true&w=majority",{dbName:'quiz'} 
//   )
//   .then(() => {
//     console.log("Connected to database!");
//   })
//   .catch((error) => {
//     console.log("Connection failed!");
//     console.log(error);
//   });
     //--------------------MONGO DB ATLAS CLOUD-----------------------//

  //--------------End Mongo DB Connection ----------------//

  // -----------------DATABASE SCHEMA------------------//

  const storageEngine = multer.diskStorage({
    destination: '/skill_client/public',
    filename: function(req, file, fn){
      fn(null,  new Date().getTime().toString()+'-'+file.originalname);
    }
  }); 

  

  var upload = multer({ storage: storageEngine })

  var fullPath="";
var imagename="";



app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});



  const userSchema = new Schema({   //--------------User Schema-------------//
    // pid:{type:Number,required:true},
     uemail:  {type:String},
     uname:  {type:String,required:true},
    // pmobile:{type:Number,required:true},
    // plocation:  {type:String,required:true},
     ucity:  {type:String,required:true},
     ustate:  {type:String,required:true},
     utype:  {type:String,required:true},
    });
   const User = mongoose.model('User', userSchema);
 


  const professionalSchema = new Schema({   //--------------Professional Schema-------------//
   // pid:{type:Number,required:true},
    pemail:  {type:String},
    pname:  {type:String,required:true},
   // pmobile:{type:Number,required:true},
   // plocation:  {type:String,required:true},
    pcity:  {type:String,required:true},
    pstate:  {type:String,required:true},
  });
  const Professional = mongoose.model('Professional', professionalSchema);




  const customerSchema = new Schema({   //--------------Customer Schema-------------//
  //  cid:{type:Number,required:true},
  cemail:  {type:String,required:true},
  cname:  {type:String,required:true},
   // cmobile:{type:Number,required:true},
  //  clocation:  {type:String,required:true},
    ccity:  {type:String,required:true},
    cstate:  {type:String,required:true},
  });
  const Customer = mongoose.model('Customer', customerSchema);




  const serviceSchema = new Schema({   //--------------Add Service Schema-------------//
   // sid:{type:Number,required:true},
    //pid:{type:Number,required:true},
    pemail:  {type:String},
    pname:  {type:String,required:true},
    pcity:  {type:String,required:true},
    pstate:  {type:String,required:true},
    servicename:  {type:String,required:true},
    servicedes:  {type:String,required:true},
    serviceprice:{type:Number,required:true},
  });
  const Service = mongoose.model('Service', serviceSchema);


  const bookingSchema = new Schema({   //--------------Booking Schema-------------//
    pemail:  {type:String},
    cemail:  {type:String,required:true},
    servicename:  {type:String,required:true},
    servicedes:  {type:String,required:true},
    serviceprice:{type:Number,required:true},
    bdate:  {type:String,required:true},
    btime:  {type:String,required:true},
    baddress:  {type:String,required:true},
    //  bid:{type:Number,required:true},
   // cid:{type:Number,required:true},
   // pid:{type:Number,required:true},
   // sid:{type:Number,required:true},
  //  bstatus:{type:Number,required:true},
  //  bbill:{type:Number,required:true},  //----booking bill------//
});
  const Booking = mongoose.model('Booking', bookingSchema);



  const photoSchema = new Schema({
   // title:  {type:String},
    //desc: {type:String},
    imagepath: {type:String,required:true},
    imagename: {type:String,required:true},
    uid:{type:String,required:true},
   // favorite:{ type:Boolean,required:true},
   // date: { type: Date, default:new Date().toLocaleDateString() ,required:true}
  });

const Photo = mongoose.model('Photo', photoSchema);



  // -----------------END DATABASE SCHEMA----------------------//

  

//------------------------------API's--------------------------//

 //--------------------------Begin Post Api------------------------//

 
 app.post("/user",function(req,res){   //----------Save User details------//
  
  let user = new User();
  user.uemail=req.body.uemail;
  user.uname=req.body.uname;
  //professional.pmobile=req.body.pmobile;
  //professional.plocation=req.body.plocation;
  user.ucity=req.body.ucity;
  user.ustate=req.body.ustate;
  user.utype=req.body.utype;

  user.save();
 res.json(user) 
})


 app.post("/professional",function(req,res){   //----------Save Professional details------//
  
    let professional = new Professional();
    professional.pemail=req.body.pemail;
    professional.pname=req.body.pname;
    //professional.pmobile=req.body.pmobile;
    //professional.plocation=req.body.plocation;
    professional.pcity=req.body.pcity;
    professional.pstate=req.body.pstate;
  
    professional.save();
   res.json(professional) 
  })
  


  app.post("/customer",function(req,res){   //----------Save Customer details------//
  
    let customer = new Customer();
    //customer.cid=req.body.cid;
    customer.cemail=req.body.cemail;
    customer.cname=req.body.cname;
    //customer.cmobile=req.body.cmobile;
    //customer.clocation=req.body.clocation;
    customer.ccity=req.body.ccity;
    customer.cstate=req.body.cstate;
  
    customer.save();
   res.json(customer) 
  })


  
  app.post("/service",function(req,res){   //----------Save Service details------//
  
    let service = new Service();
    //service.pid=req.body.pid;
   // service.sid=req.body.sid;
   service.pemail=req.body.pemail;
   service.pname=req.body.pname;
   service.pcity=req.body.pcity;
   service.pstate=req.body.pstate;
   service.servicename=req.body.servicename; 
   service.servicedes=req.body.servicedes;
    service.serviceprice=req.body.serviceprice;

    service.save();
   res.json(service) 
  })

  app.post("/booking",function(req,res){   //----------Save Booking details------//
  
    let booking = new Booking();
    //booking.bid=req.body.bid;
    //booking.cid=req.body.cid;
    //booking.pid=req.body.pid;
   // booking.sid=req.body.sid; 
    booking.pemail=req.body.pemail;
    booking.cemail=req.body.cemail;
    booking.servicename=req.body.servicename;
    booking.servicedes=req.body.servicedes;
    booking.serviceprice=req.body.serviceprice;
    booking.bdate=req.body.bdate;
    booking.btime=req.body.btime;
    booking.baddress=req.body.baddress;
    //booking.bstatus=req.body.bstatus;
    //booking.bbill=req.body.bbill;

    booking.save();
   res.json(booking) 
  })

 //--------------------------End Post Api------------------------//


  //--------------------------Begin Data Retrieval Api------------------------//

  app.get("/getuser/:uemail",function(req,res){  // ------------Get current user---------//
    User.findOne({uemail:req.params.uemail},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/pservice/:pemail",function(req,res){  // ------------Retrieve professional own services---------//
    Service.find({pemail:req.params.pemail},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/cservice/:pcity",function(req,res){  // ------------Retrieve all Customer services in same city---------//
    Service.find({pcity:req.params.pcity},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/particularservice/:pcity/:servicename",function(req,res){  // ------------Retrieve particular service in same city---------//
    Service.find({pcity:req.params.pcity,servicename:req.params.servicename},function(err,doc){
      console.log("req.params.servicename",req.params.servicename)
      console.log("req.params.pcity",req.params.pcity)

       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })
  
  app.get("/getpbooking/:pemail",function(req,res){  // ------------Get Professional booking---------//
    Booking.find({pemail:req.params.pemail},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/getcbooking/:cemail",function(req,res){  // ------------Get Professional---------//
    Booking.find({cemail:req.params.cemail},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/getcustomer/:cemail",function(req,res){  // ------------Get Customer---------//
    Customer.find({cemail:req.params.cemail},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/getprofessional/:pemail",function(req,res){  // ------------Get Professional---------//
    Professional.find({pemail:req.params.pemail},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/getcustomerservice/:pcity",function(req,res){  // ------------Get Professional---------//
    Service.find({pcity:req.params.pcity},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

  app.get("/viewlocation/:plocation",function(req,res){  // ------------Get Professional---------//
    Professional.find({plocation:req.params.plocation},function(err,doc){
       // console.log(doc) 
       console.log(doc) 
        res.json(doc)
    })
  })

   app.get("/demo",function(req,res){
    res.send("hello");
})

  //--------------------------End Data Retrieval Api------------------------//

  app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    console.log(req.file)
    // req.body will hold the text fields, if there were any
    res.json(req.file)
    fullPath = "/"+req.file.filename;
    imagename=req.file.filename;
    console.log(fullPath);
  
  })

  app.post("/photo",function(req,res){
    
    let photo = new Photo();
   // photo.title = req.body.title ;
   // photo.desc = req.body.desc ;
    photo.uid = req.body.uid ;
   // photo.favorite=req.body.favorite;
    //photo.date=req.body.date;
    photo.imagepath = fullPath ;
    photo.imagename=imagename;

    photo.save().then((doc)=>{
        res.json(doc);
        console.log(doc);
    })

})   

app.get("/photos",function(req,res){
    
  Photo.find({uid:req.query.uid}).then((docs)=>{
     res.json(docs);
  })
 
 })   

  app.get('/photo/:file(*)',(req, res) => {
    var file = req.params.file;
    var fileLocation = path.join('./uploads',file);
    res.download(fileLocation, file);
    console.log(fileLocation,file);
     
  });

  app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './build/')});
  });

  app.post("/savephoto",function(req,res){
    
    let photo = new Photo();
   // photo.title = req.body.title ;
    //photo.desc = req.body.desc ;
    photo.uid = req.body.uid ;
   // photo.image = req.body.image ;
    photo.save().then((doc)=>{
        res.json(doc);
    })

})   

app.get("/viewphoto",function(req,res){
    
 Photo.find({uid:req.query.uid}).then((docs)=>{
    res.json(docs);
 })

})   


//--------------------------------LISTEN---------------------------//


app.listen(process.env.PORT || 8081,function(){
    console.log("server started")
})
