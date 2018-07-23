import {
    GraphQLString as StringType,
    GraphQLObjectType as ObjectType,
    GraphQLID as IDType,
    GraphQLBoolean as BoolType
} from 'graphql';
import {GraphQLDate as DateType} from 'graphql-date';

const AttachmentEventType = new ObjectType({
    name: 'AttachmentEvent',
    fields: {
        event_id: {type: IDType},
        path: {type: StringType},
        created_time: {type: DateType},
        deleted_time: {type: DateType},
        deleted: {type: BoolType}
    }
});

export default AttachmentEventType;