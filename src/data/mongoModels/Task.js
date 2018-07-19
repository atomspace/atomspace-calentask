import {Schema, model} from 'mongoose';

const TaskSchema = Schema ({
    task_id: String,
    name: String,
    completed: Boolean,
    created_time: Date,
    deleted_time: Date
})

export const Task = model('Task', TaskSchema);