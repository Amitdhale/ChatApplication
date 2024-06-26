const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const LoggedInUser = async (req,res,next)=>{
    try{
        const JWT_SECRET = process.env.JWT_SECRET || "this is the secret that there is not secret";
        const token = req.headers.jwttoken;
        const userdetails = jwt.verify(token,JWT_SECRET);

        const user = await User.findOne({_id:userdetails.userid});
        req.user = user;
        next();
        
    }catch(err){
        console.log("error occured in LoggedInUser ",err.message);
        res.json({success : false,message : "UnAuthorized connection"});
    }
}

module.exports = LoggedInUser;
