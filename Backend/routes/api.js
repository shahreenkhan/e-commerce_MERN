const express = require('express');
const OrderController = require('../Controller/OrderController');
const ProductController = require('../Controller/ProductController');
const UserController = require('../Controller/UserController');
const CheckUserAuth = require('../Middleware/Auth');
const router = express.Router()

// usercontroller
router.post('/register',UserController.RegisterUser)
router.post('/login',UserController.VerifyLogin)
router.get('/logout',UserController.LogoutUser)
router.post('/changepassword',CheckUserAuth,UserController.ChangePassword)

// AdminOnly
router.get('/admin/Users',UserController.getAlluser)
router.get('/admin/deleteUser/:id',UserController.deleteuser)
router.post('/admin/UpdateUserRole/:id',UserController.updateUserRole)
router.get('/admin/singleUserRole/:id',UserController.getSingleUser)


// ProductController
router.post('/product/create',ProductController.CreatProduct)
// router.get('/product/getallproduct',ProductController.getAllProducts)
router.get('/products',ProductController.getAllProducts)
router.post('/product/update_product/:id',ProductController.UpdateProduct)
router.get('/product/delete_product/:id',ProductController.deleteProduct)
// router.get('/product/get_product_detail/:id',ProductController.getProductdetail)
router.get('/productdetail/:id',ProductController.getProductdetail)
router.get('/product/get_admin_product',ProductController.getAdminProduct)

// OrderController
router.post('/order/create',OrderController.newOrder)
router.get('/order/getallproduct',OrderController.getAllOrder)
router.get('/order/delete_product/:id',OrderController.DeleteOrder)
router.get('/order/getsingle_order/:id',OrderController.getSingleOrder)


module.exports = router;