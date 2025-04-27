const mongoose = require("mongoose");

const connectMongoose = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Database Connected...");
    }).catch((error) => {
        console.log(error.message);
    });
}

module.exports = connectMongoose;