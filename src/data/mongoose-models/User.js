import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
    user_id: String,
    name: String,
    surname: String,
    born_date: Date,
    email: String,
    phone: String,
    created_time: Date,
    deleted_time: Date || null,
    deleted: Boolean
});

export const User = mongoose.model('User', UserSchema);