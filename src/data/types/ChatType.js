import {
    GraphQLObjectType as ObjectType,
    GraphQLID as IDType
} from 'graphql';
import {GraphQLDate as DateType} from 'graphql-date';

const ChatType = new ObjectType ({
    name: 'Chat',
    fields: {
        id: {type: IDType},
        start_time: {type: DateType},
        end_time: {type: DateType},
        created_time: {type: DateType}
    }
});

export default ChatType;