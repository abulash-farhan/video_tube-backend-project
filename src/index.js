//require('dotenv').config({path: '/.env'})

import dotenv from "dotenv"
import connectDB from "./db/indexx.js";

// important to configure dotenv
dotenv.config({
    path: './env'
})

connectDB()































/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME} }`)
        app.on("error", (error)=>{
            console.log("error", error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error ("Error",error)
        throw error
    }
})()

*/