import {Schema, model} from 'mongoose';

const AttachmentChatSchema = Schema ({
    chat_id: String,
    path: String,
    created_time: Date,
    deleted_time: Date,
    deleted: Boolean,
    message_id: String
});

export const AttachmentChat = model('AttachmentChat', AttachmentChatSchema);