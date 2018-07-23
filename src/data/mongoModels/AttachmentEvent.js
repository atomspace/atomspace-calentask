import {Schema, model} from 'mongoose';

const AttachmentEventSchema = Schema({
    event_id: String,
    path: String,
    created_time: Date,
    deleted_time: Date,
    deleted: Boolean
});

export const AttachmentEvent = model('AttachmentEvent', AttachmentEventSchema);