app.post("/user", (req, res) => {
  console.log(req.body);

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "name and password require",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password is weak",
    });
  }

  let newuser = {
    id: data.length + 1,
    ...req.body
  };

  data.push(newuser);

  res.status(200).json({
    message: "user created",
  });
});

app.put("/user/:id",(req,res)=>{
    let id=parseInt(req.params.id)
    let{name}=req.body;

    let userIdx=data.findIndex((ele)=>ele.id===id);

    if(userIdx==-1){
        res.status(400).json({
            message:"user not found"
        })
    }
    //create new updated user
    let updatedUser={...data[userIdx],name:name}
    // updated the data array
    data[userIdx]=updatedUser;
    
    res.status(200).json({
    message: "user updated",
  });
})

app.delete("/user/:id",(req,res)=>{
  const id=parseInt(req.params.id);
  const userIdx=data.findIndex((ele)=>ele.id===id);
  if(userIdx==-1){
    return res.status(400).json({
      message:"user not found"
    })
  }
  data.splice(userIdx,1);
  res.status(200).json({
    message:"ures deleted",
    user:data[userIdx]
  })
})