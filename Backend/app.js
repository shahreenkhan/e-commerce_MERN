const express = require('express')
const app = express()
const dotenv = require('dotenv')
// const mongoose = require('mongoose')
const connectdb = require('./DB/Connectdb')
const API = require('./routes/api')
const fileUpload = require("express-fileupload");
app.use(fileUpload({useTempFiles: true}));
const cors=require('cors')
app.use(cors())

const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended:true}));
// const { default: mongoose } = require('mongoose')
app.use('/api',API)
dotenv.config({
    path:'.env'
})
connectdb()

app.listen(process.env.PORT, () => {
console.log(`localhost:${process.env.PORT}`)
    })







