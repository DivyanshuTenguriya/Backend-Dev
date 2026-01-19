//----------------------------------------(19/01/2025)--------------------------------------------\\

const express =require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Dev")
})

app.get("/user",(req,res)=>{
    res.send("User route")
})
app.get("/contact",(req,res)=>{
    res.send("Contacts")
})
app.get("/service",(req,res)=>{
    res.send("Services")
})

app.get("/userdetail",(req,res)=>{
    let user={
        name:"Divyanshu",
        age:"21",
        email:"qwerty@gmail.com"
    }
    res.status(200).json(user);
})

app.get("/userdetail1",(req,res)=>{
    let user1={
        name:"Yash",
        age:"21",
        email:"qwerty@gmail.com"
    }
    res.status(200).json(user1);
})

app.get("/userdetail2",(req,res)=>{
    let user2={
        name:"Jagdish",
        age:"21",
        email:"qwerty@gmail.com"
    }
    res.status(200).json(user2);
})

app.get("/userdetail3",(req,res)=>{
    let user3={
        name:"Dev",
        age:"21",
        email:"qwerty@gmail.com"
    }
    res.status(200).json(user3);
})

app.get("/userdetail4",(req,res)=>{
    let user4={
        name:"Ram",
        age:"21",
        email:"qwerty@gmail.com"
    }
    res.status(200).json(user4);
})

app.get("/userdetail5",(req,res)=>{
    let user5={
        name:"Divyansh",
        age:"21",
        email:"qwerty@gmail.com"
    }
    res.status(200).json(user5);
})



// app.get("/")

app.listen(3000,()=>{
    console.log("server is running")
})