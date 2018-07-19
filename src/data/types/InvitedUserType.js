import {
    GraphQLID as IDType,
    GraphQLObjectType as ObjectType
} from 'graphql';

const InvitedUserType = new ObjectType ({
    name: 'InvitedUser',
    fields: {
        user_id: {type: IDType},
        event_id: {type: IDType}
    }
});

export default InvitedUserType;