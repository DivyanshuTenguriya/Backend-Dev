import express from 'express';
import {fileURLToPath} from 'url'
import path from 'path';


// const __filename=fileURLToPath(import.meta.url);
// const __dirname= path.dirname(__filename);
// console.log(__dirname)
// const filepath = path.join(__dirname,'public');
// console.log(filepath)

const app=express();

app.use("/static",express.static('StaticFiles/public'));

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})