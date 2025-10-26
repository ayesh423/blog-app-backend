import { Router } from "express";
import User from "../modele/user";

const userRoute =Router();
userRoute.post('/',async(req,res)=>{
 const data = req.body;
 try{
    const newUser = await User.create(data)
    return res.status(201).send(newUser)
 }
 catch(error){
    console.log(error);
    return res.status(500).send('internel server error ')
 }
})




export default userRoute;