import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql/type';

import Message from '../mongoose-schemas/Message';

let MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    text: {type: GraphQLString},
    from: {type: GraphQLString},
    author: {type: GraphQLString},
    time: {type: GraphQLString}
  })
});

let schema = new GraphQLSchema ({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      message: {
        type: MessageType,
        args: {
          room: {
            type: GraphQLString
          }
        },
        resolve: (root, {room}) => {
          return new Promise ((resolve, reject) => {
            Message.findOne({from: room}, (err, message) => {
              err ? reject(err) : resolve(message);
            })
          })
        }
      },
      messages: {
        type: new GraphQLList(MessageType),
        resolve: (root) => {
          return new Promise ((resolve, reject) => {
            Message.find((err, messages) => {
              err ? reject(err) : resolve(messages);
            });
          });
        }
      }
    }
  })
});

export default schema;