var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var Port = process.env.PORT || 3000;

app.use(cors());

app.listen(Port);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res)=>{
  res.send('Working Fine')
})

app.post('/send', urlencodedParser, (req, res) => {
  var transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: "gpreet.panesar@gmail.com",
      pass: "vQdHI7rOnVhxBaJp"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
  transporter.sendMail({
    from: 'gpreet.panesar@gmail.com', // sender address
    to: "palsinghandsons@gmail.com", // list of receivers
    subject: "New Enquiery Received", // Subject line
    text: `Details are mentioned below:
            Name: ${req.body.name} 
            Phone No.: ${req.body.phone}
            E-mail: ${req.body.email}
            Company: ${req.body.company}
            Message: ${req.body.message}`
  });
  res.send('this is good');
});