const mongoose = require("mongoose");

const messageModel = mongoose.Schema({
    Sender : {
        type : mongoose.Schema.Types.ObjectId, ref : "User",
    },
    content : {
        type : mongoose.Schema.Types.ObjectId, ref : "User",
    },
    chat : {
        type : mongoose.Schema.Types.ObjectId, ref : "User",
    }
},
{
    timeStamps : true,
},
);

const Message = mongoose.model("Message" , messageModel);

module.exports = Message;