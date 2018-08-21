import mongoose from 'mongoose';

let TaskSchema = new mongoose.Schema({
    task_id: String,
    name: String,
    completed: Boolean,
    created_time: Date,
    deleted_time: Date
});

export const Task = mongoose.model('Task', TaskSchema);