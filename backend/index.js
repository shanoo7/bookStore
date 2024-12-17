import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/bookRoute.js'
import cors from 'cors'
const app = express()
app.use(cors())
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

app.use("/book",bookRoute);

app.listen(PORT,()=>{
 console.log(`server is listning at port ${PORT}`)
})