import Joi from "joi"
import {Vender} from "../../models"
import bcrypt from "bcrypt"

const venderLogin = async (req , res)=>{
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
        const user = await Vender.findOne({email : req.body.email})
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
            res.json({name : user.name, venderId : user._id,  statusCode : 200})
        }
    }
    catch(err){
        res.json({err : "Something went wrong" , statusCode : 402})
    }
}

export default venderLogin;