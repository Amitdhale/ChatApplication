const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    reciverId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    senderId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    message:{
        type:String,
        required:true,
    }

},{timestamps:true});

const Message = mongoose.model('Message',MessageSchema);
module.exports = Message;