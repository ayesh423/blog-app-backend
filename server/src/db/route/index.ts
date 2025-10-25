import { Router } from "express";
import userRoute from "./user";

const rootRoute = Router();

rootRoute.use('/user',userRoute);

export default rootRoute;