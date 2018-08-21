import * as mongoose from 'mongoose';

let EventSchema = new mongoose.Schema({
    id: String,
    name: String,
    start_time: Date,
    end_time: Date,
    created_time: Date,
    author: String,
    deleted: Boolean,
    deleted_time: Date || null,
    description: String,
    address: String
});

export const Event = mongoose.model('Event', EventSchema);