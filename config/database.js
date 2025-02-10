import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      "dbName":"cvonchain"
    });
    console.log("Mongodb is connected" );  
  } catch (error) {
    console.log("ERROR:While connecting to MongoDB", error);
  }
};
