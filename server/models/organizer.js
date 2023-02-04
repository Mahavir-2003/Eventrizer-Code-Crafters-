import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const organizerSchema = new Schema({
    name : {type : String , required : true},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true},
    createdEvents : [
        {
            creatorId : {type : String , required : true},
            name : String,
            dateOfStart : String,
            dateOfEnd : String,
            time : String,
            location : String,
            description : String,
            budget : String,
            eventStatus : String
        }
    ],
    eventRequests : [
        {
            eventId : {type : String , required : true},
            creatorId : {type : String , required : true},
            eventName : {type : String },
            venderId : {type : String , required : true},
            venderName : {type : String , required : true},
            tenderAmount : {type : Number, required : true}
        }
    ]
},{timestamps: true})

export default mongoose.model('Organizer', organizerSchema);