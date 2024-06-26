const bcrypt = require('bcrypt');
const User = require('../Models/User');
const generatetoken = require('../utils/generatetoken');

const signup = async (req,res)=>{
    try{
        const {username,email,password,confirmpassword,gender} = req.body;

        if(confirmpassword !== password){
            return res.json({success : false,message:"Password does not match the conformation"});
        }

        if(!username || !email || !password) return res.json({success:false,message:"Incomplete information provide full details"});

        const user_1 = await User.findOne({username});
        if(user_1) return res.json({success:false,message:"User already exist"});

        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username.trim()}`;
        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username.trim()}`;
        let profilepic;
        if(gender == 'male'){
            profilepic = boyprofilepic;
        }else{
            profilepic = girlprofilepic;
        }

        const hashpassword = bcrypt.hashSync(password,10);
        const user = await User.create({
            username,
            email,
            password:hashpassword,
            profilepic,
        })

        await user.save();
        const token = await generatetoken({userid : user._id},res);


        res.json({success:true,user:{_id : user._id,username:user.username,profilepic:user.profilepic},jwtToken:token});
}catch(err){
    console.log("Error occured in signup controller ",err.message);
    res.json({success:false,message:"Some internal error occured"});
}
} 

const login = async (req,res)=>{
    try{
        const {username,password} = req.body;

        const user = await User.findOne({username});
        if(!user){
            return res.json({success:false,message:"Invalid credentails"});
        }

        const passwordcompared = bcrypt.compareSync(password,user.password);
        if(!passwordcompared){
            return res.json({success:false,message:"Invalid credentails"})
        }

        const token = await generatetoken({userid : user._id},res);
        res.json({success:true,user:{_id : user._id,username:user.username,profilepic:user.profilepic},jwtToken:token});
    }catch(err){
        console.log("Error occured in Login controller ",err.message);
        res.json({success:false,message:"Some internal error occured"});        
    }
}


const getUser = (req,res)=>{
    try{
        const user = req.user;
        res.json({success:true,user:{_id : user._id,username:user.username,profilepic:user.profilepic}});
    }catch(err){
        console.log("Error occured in getUser controller ",err.message);
        res.json({success:false,message:"Some internal error occured"}); 
    }

}

const getPeople = async (req,res)=>{
    try{
        const users = await User.find({username:{$ne:req.user.username}}).select('username email profilepic');
        
        // const data = users.filter((user)=>{user._id.toString() !== req.user._id.toString()});
        res.json({success:true,data:users});

    }
    catch(err){
        console.log("Error occured in getPeople controller ",err.message);
        res.json({success:false,message:"Some internal error occured"});         
    }
}
module.exports = {signup,login,getUser,getPeople};