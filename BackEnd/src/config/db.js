const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected successfully");
    }
    catch(err){
        console.log("error in mongodb connection",err.message);
        process.exit(1);
    }
}

module.exports = connectDb;