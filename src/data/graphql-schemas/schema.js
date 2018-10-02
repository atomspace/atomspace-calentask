import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql/type';

import { Event } from '../mongoose-models/Event';
import { ObjectId } from 'mongodb';

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    start_time: {type: GraphQLString},
    end_time: {type: GraphQLString},
    created_time: {type: GraphQLString},
    author: {type: GraphQLString},
    deleted: {type: GraphQLString},
    deleted_time: {type: GraphQLString},
    description: {type: GraphQLString},
    address: {type: GraphQLString}
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    events: {
      type: new GraphQLList(EventType),
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve: (root, { name }) =>
        new Promise((resolve, reject) => {
          Event.find({name},(err, event) => {
            err ? reject(err) : resolve(event);
          })
        })
    },
    event: {
      type: EventType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (root, { id }) =>
        new Promise((resolve, reject) => {
          Event.findOne(ObjectId(id),(err, event) => {
            err ? reject(err) : resolve(event);
          })
        })
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
