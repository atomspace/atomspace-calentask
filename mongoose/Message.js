let mongoose = require("mongoose");

let messageSchema = new mongoose.Schema({
    time: Date,
    text: String,
    author: String,
    from: String
});

let Message = mongoose.model('Message', messageSchema);

module.exports = Message;