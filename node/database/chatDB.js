import dotenv from "dotenv";
dotenv.config();
//import { connect } from "mongoose";

import pkg from "mongoose";
const { connect } = pkg

//const MONGO_URI = process.env.MONGO_URI 

const MONGO_URI = 'mongodb://127.0.0.1/salitaChat'

export const connectDB = async () => {
    try {
        await connect(MONGO_URI)
        console.log("conectado a chatDB")
    } catch (error) {
        console.log(error)
    }
}