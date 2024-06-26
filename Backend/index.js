const express = require("express");
const auth = require("./Routes/auth");
const cors = require('cors');
const Connect = require("./DB/Connect");
const bodyParser = require('body-parser');
const {app,io,http} = require('./socket');
const messages = require('./Routes/message');
require('dotenv').config();


const PORT = process.env.PORT ||3000;


app.use(cors(
    {
        origin: `${process.env.FRONTEND_URL}` || "*", // Allow this origin to connect
        credentials: true
    }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/auth",auth);
app.use("/messages",messages);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Chat application backend</h1>")
})


http.listen(PORT,()=>{
    Connect();
    console.log("The Server is running at port :",PORT)
})
    

module.exports = app;