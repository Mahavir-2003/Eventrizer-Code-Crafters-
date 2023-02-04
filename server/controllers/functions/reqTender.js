import Joi from "joi"
import {Organizer} from "../../models"

const reqTender = async (req , res) =>{
    const tenderSchema = Joi.object({
        eventId : Joi.string().required(),
        creatorId : Joi.string().required(),
            eventName : Joi.string(),
            venderId : Joi.string().required(),
            venderName : Joi.string().required(),
            tenderAmount : Joi.number().required()
    })
    const {error} = await tenderSchema.validate(req.body);
        if(error) {
            res.json({err : error.message , statusCode : 402})
            return 0;
        }
    
    const {eventId, creatorId, eventName , venderId , venderName , tenderAmount} = req.body;
    const organizer = await Organizer.findById({_id : creatorId});
    if(!organizer){
        res.json({err : "Organizer not found" , statusCode : 404})
        return 0;
    }
    try{
        organizer.eventRequests.push({eventId , creatorId , eventName , venderId , venderName , tenderAmount})
        await organizer.save();
    }catch(err){
        res.json({err : err.message , statusCode : 402})
        return 0;
    }
    res.json({statusCode : 200 , message : "request sent successfully"})
}

export default reqTender;