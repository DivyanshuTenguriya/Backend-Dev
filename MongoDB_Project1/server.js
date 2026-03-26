import connection from "./db.js";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js"

const app =express();
const port = process.env.PORT || 5000;
dotenv.config();
connection();

app.use(express.json());
app.use("/api",userRoutes);
app.use("/api/auth",authRoutes);

app.listen(port,()=>{
    console.log("server is running")
})


