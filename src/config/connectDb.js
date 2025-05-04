import mongoose from "mongoose";
export const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("The database is connected successfully");
    } catch (error) {
        console.log(error);
    }
}