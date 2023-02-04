import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const venderSchema = new Schema({
    name : {type : String , required : true},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true},
    acceptedEvents : [
        {
            creatorId : {type : String , required : true},
            eventName : String,
            dateOfStart : String,
            dateOfEnd : String,
            time : String,
            location : String,
            description : String,
            paymentAmount : Number
        }
    ]
},{timestamps: true})

export default mongoose.model('Vender', venderSchema);