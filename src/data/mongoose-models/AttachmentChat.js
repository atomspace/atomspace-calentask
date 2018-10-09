import * as mongoose from 'mongoose';

let AttachmentChatSchema = new mongoose.Schema({
    chat_id: String,
    path: String,
    created_time: Date,
    deleted_time: Date || null,
    deleted: Boolean,
    message_id: Number
});

export const AttachmentChat = mongoose.model('AttachmentChat', AttachmentChatSchema);