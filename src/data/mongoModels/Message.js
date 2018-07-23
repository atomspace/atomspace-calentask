import {Schema, model} from 'mongoose';

const MessagesSchema = Schema ({
  text: String,
  created_time: Date,
  deleted_time: Date,
  author_id: String,
  message_id: String
});

export const Message = model('Message', MessagesSchema);