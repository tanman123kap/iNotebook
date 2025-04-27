const mongoose = require("mongoose");

const connectMongoose = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Database Connected...");
    }).catch((error) => {
        console.log(error.message);
    });
}

module.exports = connectMongoose;