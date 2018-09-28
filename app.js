//require modules
const express = require('express');
const path = require('path');

const app = express();

//set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req, res) {
  let users = [
    {
      firstName: 'Keenan',
      age: 20,
      gender: 'male'
    },
    {
      firstName: 'Paula',
      age: 21,
      gender: 'female'
    },
    {
      firstName: 'Juan',
      age: 22,
      gender: 'male'
    }

  ];
  res.json(users);
})

app.get('/downloads', function(req, res){
  res.download(path.join(__dirname, '/downloads/pdf.pdf.pdf'));
})


app.listen(3000, function(req, res){
  console.log('Live server at port 3000');
})