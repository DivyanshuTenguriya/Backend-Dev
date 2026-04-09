import express from 'express';
import session from 'express-session';

const app = express();
const PORT =process.env.PORT ||3000;


app.use(
    session({
        secret:"mysecretkey",
        resave:false,
        saveUninitialized:true,
        cookie:{
            maxAge:1000*60*1,
        },
    })
);


app.get("/login",(req,res)=>{
    let userInfo={
        id:1,
        name:"raj"
    }
    req.session.user=userInfo;
    res.send("User Logged in");
})

app.get("/profile",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome ${req.session.user.name}`);
    } else {
        res.status(401).send("Please log in first");

    }
});

app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send("Error occurred while logging out");
        } else {
            res.send("Logged out successfully");
        }
    });
});


app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
