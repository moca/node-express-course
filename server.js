const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const mockUserData = [
  {name: 'Mark'},
  {name: 'Jill'}
]

app.get('/users', function(req,res){
  res.json({
    success: true,
    message: 'successfully got users, Nice!',
    users: mockUserData
  })
})


app.get('/users/:id', function(req,res){
  res.json({
    success: true,
    message: 'got one user',
    users: req.params.id
  })
})

app.post('login', function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  
  const mockUsername="billyTheKid";
  const mockPassword="superSecret";

  if (username==mockUsername && password==mockPassword){
    res.json({
      success: true,
      message: "Password and username matched",
      token: "encrypted token goes here"
    })
  } else {
    res.json({
      success: false,
      message:'password and username do not match'
    })
  }


})
app.listen(8000, function(){
  console.log("Server is running");
})