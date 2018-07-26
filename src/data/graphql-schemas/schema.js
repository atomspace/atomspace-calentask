import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers/resolvers';
import typeDefs from './types/types';
import {MongoClient, ObjectId} from 'mongodb';
import {graphqlExpress, graphiqlConnect} from 'graphql-server-express'

export const start = async () => {
try {const db = await MongoClient.connect('mongodb://cherry:cherry_2010@ds119060.mlab.com:19060/cherry-chat');

const Messages = db.collection('messages');
const Users = db.collection('users');
const Rooms = db.collection('rooms');

const graphSchema = makeExecutableSchema({typeDefs, resolvers});

app.use('/graph', graphqlExpress({schema: graphSchema}))

const homePath = '/graphiql'

app.use(homePath, graphiqlExpress({
    endpointURL: '/graphql'
}))

} catch{(err) => {console.error(err);}}

}