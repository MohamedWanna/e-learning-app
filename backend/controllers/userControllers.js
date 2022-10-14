const userModel = require('../models/userModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//add new user
const signUp = async(req,res)=>{
    const { fullName,email, password } = req.body
    console.log(req.body)
    try {
        const existUser = await userModel.findOne({email})
        if (existUser) { return res.status(400).send({msg:"E-mail already in use"})}
        const newUser= new userModel({...req.body})
        const hashedPassword = await bcrypt.hash(password,10)
        newUser.password = hashedPassword
        await newUser.save()
        res.send({ user:newUser,msg:"User successfully registered"  })
    } catch (error) {
        console.log(error)
        res.status(400).send({error:error.messages})
    }
}
//login exist user
const signIn = async(req,res) => {
    const {email,password} = req.body
    try {
        const existUser = await userModel.findOne({email})
        if (!existUser) { 
            return res.status(400).send({msg:"Bad credentials! (email)"})
        }
        const match = await bcrypt.compare(password, existUser.password);
        if(!match) {
            return res.status(400).send({msg:"Bad credentials! (password)"})
        }
        const payload = {_id:existUser._id}
        const token = jwt.sign(payload,process.env.SECRET, {expiresIn:"1d"});
        res.send({user:existUser,token:token})
    } catch (error) {
        res.status(400).send({error:error.messages});
    }
};
const getAuthUser = async (req,res) => {
    try {
        res.send({user:req.user})
    } catch (error) {
        res.status(400).send({error:error.messages});
    }
}
const getAllUsers = async(req,res) => {
    try {
        const allUsers = await userModel.find()
        res.send({allUsers})
    } catch (error) {
        res.status(400).send({error:error.messages});
    }
}

module.exports= {signUp, signIn, getAuthUser, getAllUsers}