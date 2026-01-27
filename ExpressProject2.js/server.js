const express =require('express');
 
const app=express();

const data=require('./data');

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.get("/user1",(req,res)=>{
    res.send("Hello user1");
})
app.get("/user2",(req,res)=>{
    res.json(data);
})
app.get("/user/profile", (req, res) => {
  res.send(
    'user profile'
  );
});

app.get("/user/page",(req,res)=>{
    let page=req.query.page;
    let limit=req.query.limit;
    const startindex=(page-1)*limit;
    const endindex=page*limit;

    const pagedata=data.slice(startindex,endindex);
    res.json(pagedata);
})

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  let user = data.find((ele) => ele.id === id);
  console.log(id);
  console.log(user);
  res.json(user);
});


app.listen(3000,()=>{
    console.log("Server is running");
})