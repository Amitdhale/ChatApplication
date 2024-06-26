const jwt = require('jsonwebtoken');

const generatetoken = async (obj)=>{
    const JWT_SECRET = process.env.JWT_SECRET || "this is the secret that there is not secret";
    
    const token = jwt.sign(obj,JWT_SECRET);
    
    return token;

}

module.exports = generatetoken;