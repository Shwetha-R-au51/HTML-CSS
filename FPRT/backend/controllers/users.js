// import {v4 as uuidv4} from 'uuid';
import User from "../models/User";

import jwt from "jsonwebtoken";
const secretKey="secretkey";
export const getUsers = async (req,res) =>{
        const users = await User.find({})
        res.send(users);
    }

export const createUser = async (req,res) =>{
        //  const user= req.body;
         const firstname= req.body.firstname;
         const lastname= req.body.lastname;

         const phone= req.body.phone;
         const email = req.body.email;
         const type = req.body.type;
         const password = req.body.password;
    
     const emp= new User({
               firstName:firstname,
               lastName:lastname,

               phone:phone,
            //    id:uuidv4(), //afafaf-azfkaghke-afbekajga-agega
               email:email,
               type:type,
               password:password,
        })
    try{
          const newUser=await emp.save()
          res.status(201).json(newUser)
    }
    catch(err){
           res.status(500).json({message:err.message})
    }
   
}
export const updateUser = (req,res) =>{
    const userId = req.params.id;
    const data={};
    // data.user=req.body.user;
    data.firstName= req.body.firstName;
    data.lastName= req.body.lastName;

    data.age= req.body.age;
    data.gender = req.body.gender;
    
    User.updateOne(
        
        {id:userId}, //afafaf-azfkaghke-afbekajga-agega
        data
      );
    
     res.status(201).json(data)
    
}


export const loginUser = async(req, res)=>{
try {
const { email, password } = req.body;
  
if (!email || !password) {
  throw new BadRequestError('Please provide email ans password');
}

const user = await User.findOne({ email });

if (!user) {
  throw new Error('Invalid Credentials1');
}
// compare password
const isPasswordCorrect = user.password==password;
if (!isPasswordCorrect) {
  throw new Error('Invalid Credentials');
}
const token = createJWT({ id: user.id});
res
  .status(200)
  .json({ type: user.type, token: token })
  
}catch(err){
  res.status(401).json({message:err.message})
}
}

const createJWT = (user)=>{
const t= jwt.sign(user,'secretKey',{expiresIn:'15d'})
return t;
}