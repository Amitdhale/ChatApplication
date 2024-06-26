const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConverstationSchema = new Schema({
    participants : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
    }]
},{timestamps:true});

const Converstation = mongoose.model('Converstation',ConverstationSchema);
module.exports = Converstation

