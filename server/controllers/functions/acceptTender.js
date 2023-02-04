import Joi from "joi"
import {Vender} from "../../models"

const acceptTender = async (req , res) =>{
    const acceptSchema = Joi.object({
        venderId : Joi.string().required(),
        creatorId : Joi.string().required(),
        eventName : Joi.string().required(),
        dateOfStart : Joi.string().required(),
        dateOfEnd : Joi.string().required(),
        time : Joi.string().required(),
        location : Joi.string().required(),
        description : Joi.string().required(),
        paymentAmount : Joi.number().required()
    })
    const {error} = await acceptSchema.validate(req.body);
        if(error) {
            res.json({err : error.message , statusCode : 402})
            return 0;
        }
    const {venderId ,creatorId , eventName , dateOfStart , dateOfEnd , time , location , description , paymentAmount} = req.body;
    const vender = await Vender.findOne({ _id: venderId});
    if(!vender){
        res.json({err : "Vender not found" , statusCode : 404})
        return 0;
    }
    const newEvent = {
        creatorId,
        eventName,
        dateOfStart,
        dateOfEnd,
        time,
        location,
        description,
        paymentAmount
    }
    try{
        await vender.acceptedEvents.push(newEvent)
        await vender.save();
        res.json({msg : "Event accepted" , statusCode : 200})
    }catch(err){
        res.json({err : err.message , statusCode : 500})
    }
}

export default acceptTender;