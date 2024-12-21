import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {router as bookRouter} from './route/bookRoute.js'
import { router as userRouter } from './route/userRoute.js'
import { router as contactRouter } from './route/contactRoute.js'
import cors from 'cors'


//middleware
const app = express()
app.use(express.json())
app.use(cors())

//env
dotenv.config()
const PORT = process.env.PORT || 4001
const DB = process.env.CONNECT_DB

//connect Db
try {
    mongoose.connect(DB)
    console.log("connection successfully")
} catch (error) {
    console.log("error",error)
}

//routes
app.use("/book",bookRouter);
app.use("/user",userRouter);
app.use("/contact",contactRouter)

//localhost
app.listen(PORT,()=>{
 console.log(`server is listning at port ${PORT}`)
})