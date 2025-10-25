import Express from "express";
import e, { json } from "express"; // Import json middleware from express
import "dotenv/config";          // Correctly configure dotenv
import dbconnect from "./src/db/db";
import rootRoute from "./src/db/route";

console.log(process.env.MONGO_URL);
const server = Express();

// It should be PORT, not POST
const PORT = process.env.PORT || 4001; 

server.use(json()); 
server.use("/api/v1/",rootRoute)

 dbconnect.then(()=>{
  console.log('db conneected');
  server.listen(PORT,()=> console.log(`server is running ... on the PORT ${PORT}`));
 })
 .catch((e)=>console.log(e));