import {
    GraphQLID as IDType,
    GraphQLBoolean as BoolType,
    GraphQLString as StringType,
    GraphQLObjectType as ObjectType
} from 'graphql';
import {GraphQLDate as DateType} from 'graphql-date';

const TaskType = new ObjectType ({
    name: 'Task',
    fields: {
        task_id: {type: IDType},
        name: {type: StringType},
        completed: {type: BoolType},
        created_time: {type: DateType},
        deleted_time: {type: DateType}
    }
});

export default TaskType;