import {
    GraphQLID as IDType,
    GraphQLString as StringType,
    GraphQLObjectType as ObjectType
} from 'graphql';
const GraphQLDate = require('graphql-date');

const MessageType = new ObjectType ({
    name: 'Message',
    fields: {
        message_id: {type: IDType},
        author_id: {type: IDType},
        text: {type: StringType},
        created_time: {type: GraphQLDate},
        deleted_time: {type: GraphQLDate}
    }
});

export default MessageType;