const UserModel = require('../Models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../Models/User');

class UserController{
    static RegisterUser = async(req,res)=>{
        // res.render('admin/register')
        //  console.log(req.body)
        // input wale name hai ye jo form me hai inhe variable me store krlia
        const{name,email,password,c_password} = req.body; 
        const admin = await UserModel.findOne({email:email})
        if(admin){
           res.send({status: "failed" , message: "Email Already Exists!"})
        }
        else{
            if(name && email && password && c_password){
                if(password == c_password){
                    try{
                        const hashpassword =await bcrypt.hash(password,10)
                        const data = await UserModel({
                            name:name,
                            email:email,
                            password:hashpassword,
                        })
                        await data.save()
                        res.status(200).json({ status: "success", message: "Registration Succesfully" });
                        
                    }catch(err){
                        console.log(err)
                    }

                }else{
                 res.status(404).json({status: "failed" , message: "Password and Confirm Password does not Match!"})   
                }

            }
            else{
                res.status(404).json({status: "failed" , message: "All Feilds Are Require"})   
            }
        }

     
    }
    static VerifyLogin = async(req,res)=>{
        try{
            const{email,password} = req.body;
            // console.log(password)
            if(email && password){
                const user = await UserModel.findOne({email:email})
                // console.log(user.password)
                if(user != null){
                    const isMatched = await bcrypt.compare(password,user.password)
                    if((user.email=== email)&& isMatched){
                        //verify token
                        const token = jwt.sign({ userId: user._id }, 'ashreenkhan');
                        res.cookie('token',token)
                        res
                        .status(201)
                        .send({ status: "success", message: "Login successfully with web token 😃🍻", "Token": token});
                       
                        res.send({status: "success" , message: "login successfully with 😃🍻", "Token":token})
                        // res.redirect('/admin/dashboard')

                    }else{
                        res.send({status: "failed" , message: "Email or Password is not Matched"})
                        
                    }
               }else{
                res.send({status: "failed" , message: "You are not Registered!"})
                 //  return res.redirect('/login')
                }

            }else{
                res.send({status: "failed" , message: "All Feilds Are Require!"})
                
            }
        }catch(err){
            console.log(err)
        }
    }
    static LogoutUser = async(req,res)=>{
        try{
            res.clearCookie('token') 
            res.send({status: "success" ,message:"Logout Successfully 😃🍻"})
            // res.redirect('/login')
        }catch(err){
            console.log(err)
        }
    }
     static ChangePassword = async(req,res)=>{
         console.log(req.user)
        const { oldPassword, newPassword, confirmPassword } = req.body

        if (oldPassword && newPassword && confirmPassword) {
            const user = await userModel.findById(req.user.id);
            const isMatch = await bcrypt.compare(oldPassword, user.password)
            //const isPasswordMatched = await userModel.comparePassword(req.body.oldPassword);
            if (!isMatch) {
                res.send({ "status": 400, "message": "Old password is incorrect" })
            } else {
                if (newPassword !== confirmPassword) {
                    res.send({ "status": "failed", "message": "password does not match" })
                } else {
                    const salt = await bcrypt.genSalt(10)
                    const newHashPassword = await bcrypt.hash(newPassword, salt)
                    //console.log(req.user)
                    await userModel.findByIdAndUpdate(req.user.id, { $set: { password: newHashPassword } })
                    res.send({ "status": "success", "message": "Password changed succesfully" })
                }

            }

        } else {
            res.send({ "status": "failed", "message": "All Fields are Required" })
        }
    }
    static UpdateProfile = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(err)
        }
    }

    // AdminOnly
    static getAlluser = async(req,res)=>{
        try {
            const data = await UserModel.find()
            res.status(200).json({
                Success:true,
                data
            })
        } catch (error) {
            console.log(err)
        }
    }
    static getSingleUser = async(req,res)=>{
        // console.log(req.params.id)
        try {
            const data = await UserModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                data
            })
        } catch (err) {
            res.send(err)
        }
    }
    static deleteuser = async(req,res)=>{
        //    console.log(req.params.id)
          try{
            const data = await UserModel.findByIdAndDelete(req.params.id)
            return res.status(400)
             .send({status:"success",message:"User Role Deleted Successfully !"})
        }catch(err){
            res.send(err);
        }
    }
    static updateUserRole = async(req,res)=>{
        //  console.log(req.body)
       
        try {
            // console.log(req.params.id)
            const data = await UserModel.findById(req.params.id)
            const update = await UserModel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                email: req.body.email,
                })
            //saving data
            await update.save()
            res.status(201)
            .send({status:"success",message:"Product Update Successfully !"})

        } catch (err) {
            res.send(err)
        }
    }

}

module.exports = UserController