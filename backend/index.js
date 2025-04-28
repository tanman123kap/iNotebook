const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes.js");
const notesRouter = require("./routes/notes.routes.js");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://i-notebook-frontend-delta.vercel.app", // or whatever your React dev URL is
    credentials: true // optional if you're sending cookies
}));
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);

app.get("/", async (req, res) => {
    res.send("app");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Database Connected...");
    app.listen(process.env.PORT, async () => {
        try {
            console.log(`Server started at port ${process.env.PORT}`);
        } catch (error) {
            console.log(error.message);
        }
    });
}).catch((error) => {
    console.log(error.message);
});