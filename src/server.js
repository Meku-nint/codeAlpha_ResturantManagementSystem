import express from 'express';
import dotenv from 'dotenv';
import restaurantRouter from './router/route.js';
import { connectDb } from './config/connectDb.js';
dotenv.config();
const app=express();
const PORT=process.env.PORT||8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",restaurantRouter);
// app.use("/api",eventRouter);
app.listen(PORT,async()=>{
    await connectDb();
    console.log(`Server is running on port ${PORT}`);
})