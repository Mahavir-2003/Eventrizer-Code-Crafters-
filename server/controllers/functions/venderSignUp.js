import Joi from "joi"
import {Vender} from "../../models"
import bcrypt from "bcrypt"

const venderSignUp = async (req , res)=>{

    const registerSchema = Joi.object({
        name : Joi.string().min(3).max(30).required(),
        email : Joi.string().email().required(),
        password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });
    
    const {error} = await registerSchema.validate(req.body);
        if(error) {
            res.json({err : error.message , statusCode : 402})
            return 0;
        }
        
            const {name , email , password} = req.body;
            const  hashedPassword = await bcrypt.hash(password,10);
            const vender = new Vender({
                name : name,
                email : email,
                password : hashedPassword
            });

            try{
                const data = await vender.save();
                res.json({name : data.name , venderId : data._id ,statusCode : 200})
            }catch(err){
                res.json({err : "Email already exist" , statusCode : 402})
            }
}

export default venderSignUp;