import {
    GraphQLObjectType as ObjectType,
    GraphQLID as IDType
} from 'graphql';

const ChatMemberType = new ObjectType ({
    name: 'ChatMember',
    fields: {
        user_id: {type: IDType},
        chat_id: {type: IDType}
    }
});

export default ChatMemberType;