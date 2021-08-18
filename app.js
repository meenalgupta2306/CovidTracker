const express= require("express");
const path=require("path");
const app =express()
const bodyparser=require("body-parser")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/donate', {useNewUrlParser: true, useUnifiedTopology: true});
const port = process.env.PORT || 1000;
mongoose.connection.once('open', function(){
    console.log('connection has been made')
}).on('error',function(error){
    console.log('connection error',error)
}) 
//creating SCHEMA
const donateSchema = new mongoose.Schema({
    name: String,
    gender: String,
    discharge: String,
    positive: String,
    phone: Number,
    city: String,
    age: Number,
    diagnosis: String,
    negativereport:String,
    clinicalhistory: String,
    state: String,
    address: String
  });
const requestSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    blood: String,
    positivereport: String,
    state:String,
    city: String,
    hospital: String,
    phone: Number,
    address: String,
  }); 

//compiling schema into model
var donateplasma = mongoose.model('donateplasma', donateSchema);
var requestplasma = mongoose.model('requestplasma', requestSchema);

// express stuff
app.use('/static', express.static('public'))
app.use('/static', express.static('static')) //serve static files
app.use(express.urlencoded({extended: true})) //parses upcoming requests

//pug stuff
app.set('view engine', 'pug') //set template engine as pug
app.set('views', path.join(__dirname, 'views')) //set views directory

//endpoints
app.get('/', (req, res)=>{
    const params ={}
    res.status(200).render('home.pug',params);
})

//vaccine
app.get('/vaccine', (req, res)=>{
    const params ={}
    res.status(200).render('vaccine.pug',params);
})
app.get('/plasma', (req, res)=>{
    const params ={}
    res.status(200).render('plasma.pug',params);
})

app.post('/donate', (req, res)=>{
    var donatedata= new donateplasma(req.body);
    
    donatedata.save(function(err,doc){
        res.render('plasma.pug')
        if (err) return console.error(err);
    });
})
app.post('/request', (req, res)=>{
    var requestdata= new requestplasma(req.body);
    
    requestdata.save(function(err,doc){
        res.render('plasma.pug')
        if (err) return console.error(err);
    });
})


//india
app.get('/india', (req, res)=>{
    const params ={}
    /* res.json(req.body) */
    res.status(200).render('india.pug',params);
})
//global
app.get('/global', (req, res)=>{
    const params ={}
    res.status(200).render('global.pug',params);
})

//start the server
app.listen(port, ()=>{
    console.log(`the application started on port ${port}`);
})
