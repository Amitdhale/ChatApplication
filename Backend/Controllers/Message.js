const Conversation = require('../Models/Converstation');
const Message = require('../Models/Messages');
const {getReceiverSocketId,io} = require('../socket');

const sendMessage = async (req,res)=>{
    try{
        const senderId = req.user._id;
        const reciverId = req.body.reciverId;
        const message = req.body.message;

        if(!senderId || !reciverId || !message){
            return res.json({success:false,message:"Incomplete information"});
        }
        
        let conversation = await Conversation.findOne({
            participants :  { $all: [senderId, reciverId] },
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId,reciverId]
            });
        }

        const newmessage = new Message({
            senderId,
            reciverId,
            message,
        })

        if(newmessage){
            conversation.messages.push(newmessage._id);
        }
        // await newmessage.save();
        // await conversation.save();
        await Promise.all([conversation.save(),newmessage.save()]);

        const receiversocketId = getReceiverSocketId(reciverId);
        if(receiversocketId){
            io.to(receiversocketId).emit("newMessage",newmessage);
            // console.log(receiversocketId);
            // console.log("send a message");
        }


        // socket io for direct message


        res.json({success:true,newmessage});
    }catch(err){
        console.log("error in send Message controller ",err.message);
        res.json({success:false,message:"Some internal error occured"});

    }

}

const reciveMessage = async (req,res)=>{
    try{
        const {id:reciverId} = req.params;
            const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, reciverId] },
        }).populate("messages");

        if (!conversation) return res.status(200).json({success:true,data :[]});

        const messages = conversation.messages;
        res.status(200).json({success:true,data :messages});
    }catch(err){
        console.log("Error in the reciveMessage controller ",err.message);
        res.json({success:false,message:"Some internal error occured"});
    }
}

module.exports = {sendMessage,reciveMessage}
