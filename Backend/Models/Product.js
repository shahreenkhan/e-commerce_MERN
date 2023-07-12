const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    stock: {
        type: Number,
        required:true,
        default: 1
    },
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    images: {
        public_id: {
            type:String,
            // required:true
        },
        url: {
            type: String,
            // required:true
        },
    },
    category: {
        type: String,
        // required:true
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
},
{timestamps:true});

var ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;