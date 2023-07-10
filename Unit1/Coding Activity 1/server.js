const express = require("express");
const port = 8000;

const app= express();


  app.get('/', (req, res) => {
      res.send("<h1>Welcome to the sample sever </h1>");
   
    })
 
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })