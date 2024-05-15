const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            "Database connected successfully",
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.log("Error in connecting to DB", error);
        process.exit(1);
    }
};

module.exports = connectDB;
