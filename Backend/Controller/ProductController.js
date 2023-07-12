const ProductModel = require("../Models/Product")

class ProductController{
    static getAllProducts = async(req,res) =>{
        try {
            const allproducts = await ProductModel.find()
            res.status(200).json(
                {
                success:true,
                allproducts
            }
            )
            
        } catch (err) {
            res.send(err)
        }
    }

    // Admin
    static CreatProduct = async(req,res) =>{
        // console.log(req.body)
        try {
            const data = await ProductModel.create(req.body)
            res.status(201)
            .send({status:"success",message:"Product Added Successfully !"})

        } catch (err) {
            res.send(err)
        }
    }
    static getProductdetail = async(req,res) =>{
        try {
            const productdetail = await ProductModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                productdetail
            })
        } catch (err) {
            res.send(err)
        }
    }
    static getAdminProduct = async(req,res) =>{
        try {
            const data = await ProductModel.find()
            res.status(200).json({
                success:true,
                data
            })
        } catch (err) {
            res.send(err)
        }
    }
    static UpdateProduct = async(req,res) =>{
        // console.log(req.body)
        try {
            const data = await ProductModel.findById(req.params.id)
            // const image_id = data.image.public_id
            // console.log(image_id)
            // await cloudinary.uploader.destroy(image_id);

            // const Blogimage = req.files.image
            //    console.log(imagefile)
            // const BlogImage_upload = await cloudinary.uploader.upload(
            //     Blogimage.tempFilePath,
            //     {
            //     folder: "Blog_image",
            //     width: 400,
            // })

            const update = await ProductModel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                // image:image_upload.secure_url,
                // image: {
                //     public_id: BlogImage_upload.public_id,
                //     url: BlogImage_upload.secure_url,
                // },
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                rating: req.body.rating
                })
            //saving data
            await update.save()
            res.status(201)
            .send({status:"success",message:"Product Update Successfully !"})

        } catch (err) {
            res.send(err)
        }
    }
    static deleteProduct = async(req,res) =>{
       // console.log(req.params.id)
       try{
        const result = await ProductModel.findByIdAndDelete(req.params.id)
        return res.status(400)
         .send({status:"success",message:"Product Deleted Successfully !"})
    }catch(err){
        res.send(err);
    }
    }
}
module.exports = ProductController