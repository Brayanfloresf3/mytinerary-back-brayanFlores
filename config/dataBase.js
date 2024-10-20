import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(process.env);

async function connectDatabase(url) {
    try {
        await mongoose.connect(url);
        console.log("Database connected to Mongo");
    } catch (error) {
        console.log(error);
    }
}

connectDatabase(url);
