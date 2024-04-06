import mongoose from "mongoose";

async function connect() {
    try {
    mongoose.connect(process.env.DB_C)
    console.log("sucess!!")
    return mongoose.connection;
    } catch (error) {
        console.error(error);
    }
}

export default connect;