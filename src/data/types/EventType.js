import {
    GraphQLString as StringType,
    GraphQLObjectType as ObjectType,
    GraphQLID as IDType,
    GraphQLBoolean as BoolType
} from 'graphql';
import {GraphQLDate as DateType} from 'graphql-date';

const EventType = new ObjectType({
    name: 'Event',
    fields: {
        id: {type: IDType},
        name: {type: StringType},
        start_time: {type: DateType},
        end_time: {type: DateType},
        created_time: {type: DateType},
        author: {type: StringType},
        deleted: {type: BoolType},
        deleted_time: {type: DateType},
        description: {type: StringType},
        address: {type: StringType}
    }
});
export default EventType;