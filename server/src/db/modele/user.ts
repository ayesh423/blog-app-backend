import { model, Schema } from "mongoose";

const userModle  = new Schema({
    name: String,
    username: String
})

const User = model("User",userModle);
export default User;