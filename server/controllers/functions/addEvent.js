import Joi from "joi"
import {Organizer} from "../../models"


const addEvent = async (req , res) =>{

    const eventSchema = Joi.object({
        creatorId : Joi.string().required(),
        name : Joi.string().required(),
        dateOfStart : Joi.string(),
        dateOfEnd :Joi.string(),
        time : Joi.string(),
        location : Joi.string().required(),
        description : Joi.string().required(),
        budget :Joi.string().required(),
        eventStatus : Joi.string().required()
    })

    const {error} = await eventSchema.validate(req.body);
        if(error) {
            res.json({err : error.message , statusCode : 402})
            return 0;
        }

        const creatorId = req.body.creatorId;
        try{
            const user = await Organizer.findOne({_id: creatorId})
            if(!user){
                res.json({err : "Unauthorized can't add events" , statusCode : 402})
                return 0;
            }
            const event = await Organizer.findOneAndUpdate({_id : creatorId} , {$push : {createdEvents : req.body}})
            const organizer = await Organizer.findOne({_id : creatorId})
            const events = await organizer.createdEvents;
            res.json({events , statusCode : 200})
        }catch(err){
            res.json({err : "Something went wrong" , statusCode : 402})
        }
}


export default addEvent;

