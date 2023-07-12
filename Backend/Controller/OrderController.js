const OrderModel = require("../Models/Order");

class OrderController{
    static newOrder = async(req,res) =>{
        try {
            // console.log(req.body)
            const data = await OrderModel.create(req.body)
            res.status(201)
            .send({ status: "success", message: "Order Added Successfully !"});
        } catch (error) {
            
        }
    }
    static getSingleOrder = async(req,res) =>{
        try {
            const data = await OrderModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                data
            })   
        } catch (error) {
            
        }
    }

    // user(after user login )
    static MyOrder = async(req,res) =>{
        try {
            
        } catch (error) {
            
        }
    }
    // admin ke liye
    static getAllOrder = async(req,res) =>{
        try {
            const data = await OrderModel.find()
            res.status(200).json({
                success:true,
                data
            })
            
        } catch (err) {
            res.send(err)
        }
    }
    static DeleteOrder = async(req,res) =>{
        // console.log(req.params.id)
       try{
        const result = await OrderModel.findByIdAndDelete(req.params.id)
        return res.status(400)
         .send({status:"success",message:"Order Deleted Successfully !"})
    }catch(err){
        res.send(err);
    }
    }

}
module.exports=OrderController