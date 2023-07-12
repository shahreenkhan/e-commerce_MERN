const UserModel = require('../Models/User')
const jwt = require('jsonwebtoken')

const CheckUserAuth = async(req,res,next)=>{

    try {
        const { token } = req.cookies
        //res.send(token)
        if(!token){
            res.status(401).send({
            'status':'failed',
            'message':'Unauthorised user , No Token Now'
        })
        }
        const data = jwt.verify(token,process.env.JWT_SECRET_KEY)
        // console.log(data)
         req.user = await UserModel.findById(data.userId)
        //  res.send(req.user)
         next()
    } catch (err) {
        res.send(err)
    }
    
  }

  const AuthRoles = (roles)=>{
    return (req,res,next)=>{
        res.send(roles)
    }
  }
  module.exports =CheckUserAuth,AuthRoles
  // middleware security ke liye user krte hai ye     REQUEST AND RESPONSE  ke bich kam krta hai