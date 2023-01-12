const express = require('express');
const app =express();
const mysql = require("mysql");

app.get("/",function(req,res) {
  user:"",
  password: "",
  server: "",
  database: "",
};
  mssql.connect(config, function (err) {
    
    var request =new mssql.Request();
    request.query("select * from user_info",
       function(err,info){
        if(err) console.log(err)
        res.send(info);
       });
  });

});

