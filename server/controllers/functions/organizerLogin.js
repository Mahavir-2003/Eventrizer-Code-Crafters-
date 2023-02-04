import Joi from "joi"
import {Organizer} from "../../models"
import bcrypt from "bcrypt"

const organizerLogin = async (req , res)=>{
    const loginSchema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
    const {error} = await loginSchema.validate(req.body);
    if(error) {
        res.json({err : error.message , statusCode : 402})
        return 0;
    }

    try{
        const user = await Organizer.findOne({email : req.body.email})
        if(!user){
            res.json({err : "No such user found" , statusCode : 402})
            return 0;
        }
        // compare the password
        const match = await bcrypt.compare(req.body.password,user.password)
        if(!match){
            res.json({err : "Wrong credentials" , statusCode : 402})
            return 0;
        }else{
            res.json({name : user.name, organizerId : user._id ,createdEvents : user.createdEvents ,  statusCode : 200})
        }
    }
    catch(err){
        res.json({err : "Something went wrong" , statusCode : 402})
    }
}

export default organizerLogin;