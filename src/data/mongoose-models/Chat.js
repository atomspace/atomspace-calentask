import * as mongoose from 'mongoose';

let ChatSchema = new mongoose.Schema({
    id: String,
    start_time: Date,
    end_time: Date,
    created_time: Date
});

export const Chat = mongoose.model('Chat', ChatSchema);