import {Schema, model} from 'mongoose';

const ChatSchema = Schema({
    id: String,
    start_time: Date,
    end_time: Date,
    created_time: Date
});

export const Chat = model('Chat', ChatSchema);