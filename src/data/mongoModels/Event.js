import {Schema, model} from 'mongoose';

const EventSchema = Schema ({
    id: String,
    name: String,
    start_time: Date,
    end_time: Date,
    created_time: Date,
    author: String,
    deleted: Boolean,
    deleted_time: Date,
    description: String,
    address: String
})

export const Event = model('Event', EventSchema);