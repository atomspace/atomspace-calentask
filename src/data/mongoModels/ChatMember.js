import {Schema, model} from 'mongoose';

const ChatMemberSchema = Schema ({
    user_id: String,
    chat_id: String
});

export const ChatMember = model('ChatMember', ChatMemberSchema);