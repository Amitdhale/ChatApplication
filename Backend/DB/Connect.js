const mongoose = require('mongoose');

async function Connect(){
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_URL}:${process.env.MONGO_DB_URL_PASSWORD}@cluster0.fxobknw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("connected to the database");
    }catch(err){
        console.log("error in connect.js");
        console.log("unable to connect to the database ",err.message);
    }
}
module.exports = Connect;

//chatapp database