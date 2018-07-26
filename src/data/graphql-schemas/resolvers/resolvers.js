import {ObjectId} from 'mongodb';

const prepare = (obj) => {
  obj._id = obj._id.toString();
  return obj;
}

const resolvers = {
  Query: {
    room: async (root, {_id}) => {
      return prepare(await Rooms.findOne(ObjectId(_id)))
    },
    rooms: async () => {
      return (await Rooms.find({}).toArray()).map(prepare)
    },
    message: async (root, {_id}) => {
      return prepare(await Messages.findOne(ObjectId(_id)))
    },
    messages: async (root, {_id}) => {
      return (await Messages.find({}).toArray()).map(prepare)
    },
    user: async (root, {_id}) => {
      return prepare(await Users.findOne(ObjectId(_id)))
    },
    users: async () => {
      return (await Users.find({}).toArray()).map(prepare)
    }
  }
}

export default resolvers;