const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require ("./config/db.js");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound , errorHandler } = require ("./middleware/errorMiddleware");
// const bodyParser = require('body-parser');






const app = express();
app.use(express.json());
connectDB();
dotenv.config();

app.use(cors());
// app.use(bodyParser.json());

app.get('/' , (req , res) => {
    res.send("Api working fine");
});

app.get('/api/chat' , (req , res) => {
    res.send(chats);
});

app.get('/api/chat/:id' , (req , res) => {
    console.log(req.params.id)
    let singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

app.use("/api/user/" , userRoutes);
app.use ("/api/chat/" , chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT  = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server is running on port ${PORT}`));