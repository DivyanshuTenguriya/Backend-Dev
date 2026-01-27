const express = require("express");

const app = express();

const { data } = require("./data");
// const port=3000;

app.get("/data", (req, res) => {
  res.json(data);
});
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/userdetail", (req, res) => {
  res.json(user);
  console.log(user);
});
app.get("/elder", (req, res) => {
  let userGeraterThan25 = data.filter((ele) => ele.age > 25);
  res.json(userGeraterThan25);
});

app.get("/name", (req, res) => {
  let names = data.map((x) => {
    if (x.gender === "male") {
      return "Mr. " + x.name;
    } else if (x.gender === "female") {
      return "Mrs. " + x.name;
    }
  });

  console.log(names);
  res.send(names);
});

app.get("/user/profile", (req, res) => {
  res.send(
    'user profile'
  );
});

app.get("/user/page",(req,res)=>{
    let name=req.query.name;
    let size=req.query.size;
    res.json({name,size});
})

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  let user = data.find((ele) => ele.id === id);
  console.log(id);
  console.log(user);
  res.json(user);
});

app.get("/user/profile", (req, res) => {
  res.send(
    'user profile'
  );
});

app.listen(3000, () => {
  console.log("server is running");
});
