const express = require("express");
const connectMongoose = require("./db.js");
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

app.listen(process.env.PORT, async () => {
    try {
        await connectMongoose();
        console.log(`Server started at port ${process.env.PORT}`);
    } catch (error) {
        console.log(error.message);
    }
});