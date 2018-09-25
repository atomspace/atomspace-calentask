import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql/type';

import { Message } from '../mongoose-models/Message';

const prepare = o => {
  o.id = toString(o._id);
};

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    text: { type: GraphQLString },
    from: { type: GraphQLString },
    author: { type: GraphQLString },
    time: { type: GraphQLString },
    id: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    message: {
      type: MessageType,
      args: {
        room: {
          type: GraphQLString,
        },
      },
      resolve: (root, { room }) =>
        new Promise((resolve, reject) => {
          Message.findOne({ from: room }, (err, message) => {
            err ? reject(err) : resolve(message);
          });
        }),
    },
    messages: {
      type: new GraphQLList(MessageType),
      args: {
        room: {
          type: GraphQLString,
        },
      },
      resolve: (root, { room }) => new Promise((resolve, reject) => {
        Message.find({ from: room }, (err, messages) => {
          err ? reject(err) : resolve(messages);
        });
      })
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
