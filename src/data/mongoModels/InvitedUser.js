import {Schema, model} from 'mongoose';

const InvitedUserSchema = Schema ({
    user_id: String,
    event_id: String
})

export const InvitedUser = model('InvitedUser', InvitedUserSchema);