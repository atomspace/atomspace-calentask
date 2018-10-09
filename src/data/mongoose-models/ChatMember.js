import * as mongoose from 'mongoose';

let ChatMemberSchema = new mongoose.Schema({
    user_id: String,
    chat_id: String
});

export const ChatMember = mongoose.model('ChatMember', ChatMemberSchema);