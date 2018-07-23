import {
    GraphQLString as StringType,
    GraphQLObjectType as ObjectType,
    GraphQLID as IDType,
    GraphQLBoolean as BoolType
} from 'graphql';
import {GraphQLDate as DateType} from 'graphql-date';

const AttachmentChatType = new ObjectType ({
    name: 'AttachmentChat',
    fields: {
        chat_id: {type: IDType},
        path: {type: StringType},
        created_time: {type: DateType},
        deleted_time: {type: DateType},
        deleted: {type: BoolType},
        message_id: {type: IDType}
    }
});

export default AttachmentChatType;