import express from "express";
import { APP_PORT ,DB_URL } from "./config";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";
 
const app = express();

app.use(cors())


mongoose.connect(DB_URL,{useNewUrlParser : true , useUnifiedTopology : true })
const db = mongoose.connection;
db.on("error",console.error.bind(console , "DB Connection Error"));
db.once("open",()=>{
    console.log("DB Connected")
})



app.use(express.json());
app.use(routes);
app.listen(APP_PORT , ()=>{
    console.log(`Server running on port ${APP_PORT}`)
})