const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');
var reload = require('./node_modules/reload')

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location

app.post('/email',  (req, res) => {

    console.log(req.body); 
    console.log(req.email); 
    console.log(req.params);
    
    const nodemailer = require('nodemailer');
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: "lypandrew87@gmail.com",
              pass: "Hilltop87!"
          }
      });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.name, // sender address
            to: "lypandrew87@gmail.com", // list of receivers
            subject: 'Photo Opportunity', // Subject line
            html: req.body.note + "<br/>" + "Contat Information: " +"<br/>" + "Email: "+ req.body.email + "<br/> Name: " + req.body.name,
        };
    
        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
                res.send("Sorry, the message could not be sent. Please try again.")
                
            }
            console.log('Message sent: %s', info.messageId);
            res.send("Message has been sent! I will get back to you soon!")
            
        });
    });
    
});
    
app.get('/api', (req, res) => {

    console.log("here"); 
    MongoClient.connect('mongodb://localhost:27017/mean', function (err, db) {
        if (err) throw err
      
        db.collection('users').find().toArray(function (err, result) {
          if (err) throw err
      
         
         res.send(result); 
        })
      })
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/app/app.component.html'));
});
//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);


const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));