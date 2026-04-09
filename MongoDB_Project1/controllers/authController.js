import user from "../model/UserSchema.js";


export const signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body;


        const newUser=await user.create({
            name,
            email,
            password,
        });

        res.status(200).json({
            message:"user is created",
            newUser,
        });
    }
    catch(error){
        console.log(error);
        res.status(200).json({
            message:"internal server error",
            error:error.message
        })
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await user.find({email});
        if(!user){
            res.status(404).json({message:"User not found"})
        }
        console.log(user);
        res.status(200).json({
            message:"user is logged in",
            user,
        });
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({message:"Invalid credentials"})
        }
        console.log(isMatch);
    }catch(error){
        console.log(error);
        res.status(200).json({
            message:"internal server error",
            error:error.message
        })
    }
}


