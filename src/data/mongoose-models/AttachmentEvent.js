import * as mongoose from 'mongoose';

let AttachmentEventSchema = new mongoose.Schema({
    event_id: String,
    path: String,
    created_time: Date,
    deleted: Boolean,
    deleted_time: Date || null
});

export const AttachmentEvent = mongoose.model('AttachmentEvent', AttachmentEventSchema);