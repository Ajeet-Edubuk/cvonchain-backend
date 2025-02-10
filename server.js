import { app } from "./app.js";
import { connectDB } from "./config/database.js";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/cv", paymentRoute);

app.get("/",(res,req)=>{
  return res.json({
    message:"helth is ok !"
  })
})

app.listen(8001, () =>
  console.log(`Server is working on 8001`)
);
