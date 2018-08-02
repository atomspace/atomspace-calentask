import {
  makeExecutableSchema
} from 'graphql-tools';
// import {
//   MongoClient,
//   ObjectId
// } from 'mongodb';
import {
  ApolloServer,
  gql
} from "apollo-server-express";

export const start = async (app) => {
  // try {
    // const db = await MongoClient.connect('mongodb://cherry:cherry_2010@ds119060.mlab.com:19060/cherry-chat');
    
    // const Messages = db.collection('messages');
    // console.log(db.collection('messages'));
    // const Users = db.collection('users');
    // const Rooms = db.collection('rooms');

  //   const prepare = (obj) => {
  //     obj._id = obj._id.toString();
  //     return obj;
  //   }

    //     const typeDefs = [`
    //         type Query {
    //     user(_id: String): Message
    //     room(_id: String): Room
    //     message(_id: String): Message
    //     users: [User]
    //     rooms: [Room]
    //     messages: [Message]
    // }

    // type User {
    //     _id: String
    //     username: String
    //     name: String
    //     password: String
    // }

    // type Room {
    //     _id: String
    //     roomName: String
    //     password: String
    // }

    // type Message {
    //     _id: String
    //     text: String
    //     from: String
    //     author: String
    //     time: String
    // }

    // schema {
    //     query: Query
    // }
    // `]
    //     const resolvers = {
    //       Query: {
    //         room: async (root, {
    //           _id
    //         }) => {
    //           return prepare(await Rooms.findOne(ObjectId(_id)))
    //         },
    //         rooms: async () => {
    //           return (await Rooms.find({}).toArray()).map(prepare)
    //         },
    //         message: async (root, {
    //           _id
    //         }) => {
    //           return prepare(await Messages.findOne(ObjectId(_id)))
    //         },
    //         messages: async (root, {
    //           _id
    //         }) => {
    //           return (await Messages.find({}).toArray()).map(prepare)
    //         },
    //         user: async (root, {
    //           _id
    //         }) => {
    //           return prepare(await Users.findOne(ObjectId(_id)))
    //         },
    //         users: async () => {
    //           return (await Users.find({}).toArray()).map(prepare)
    //         }
    //       }
    //     }


    const typeDefs = gql `
      type Query {
        hello: String
      }
   `;

    const resolvers = {
      Query: {
        hello: () => 'Hello world!',
      },
    };
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.applyMiddleware({
      app: app
    });


  // } catch {
  //   (err) => {
  //     console.error(err);
  //   }
  // }

}
