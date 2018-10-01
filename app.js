//require modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//set static path
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/users', function(req, res) {
//   let users = [
//     {
//       firstName: 'Keenan',
//       age: 20,
//       gender: 'male'
//     },
//     {
//       firstName: 'Paula',
//       age: 21,
//       gender: 'female'
//     },
//     {
//       firstName: 'Juan',
//       age: 22,
//       gender: 'male'
//     }

//   ];
//   res.json(users);
// })

app.get('/downloads', function(req, res){
  res.download(path.join(__dirname, '/downloads/pdf.pdf.pdf'));
})

app.get('/about', function(req, res){
  res.redirect('/about.html');
})

app.post('/subscribe', function(req, res){
  let name = req.body.name;
  let email = req.body.email;
  console.log(`${name} has subscribed to newsletter using ${email}`);
})

app.listen(3000, function(req, res){
  console.log('Live server at port 3000');
})