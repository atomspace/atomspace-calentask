import * as mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    text: String,
    time: Date,
    author: String,
    from: String
});

export const Message = mongoose.model('Message', MessageSchema);
