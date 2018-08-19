let {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
} = require('graphql/type');

let Message = require('../../mongoose/Message');

let MessageType = new GraphQLObjectType({
    name: 'message',
    fields: () => ({
        time: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        },
        from: {
            type: GraphQLString
        }
    })
});

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            message: {
                type: MessageType,
                args: {
                    room: {
                        name: 'from',
                        type: GraphQLString
                    }
                },
                resolve: (root, {room}) => {
                    return new Promise ((resolve, reject) => {
                        Message.findOne({from: room}, (err, message) => {
                            err ? reject(err) : resolve(message)
                        })
                    });
                }
            },

            messages: {
                type: new GraphQLList(MessageType),
                resolve: (root) => {
                    return new Promise((resolve, reject) => {
                        Message.find((err, messages) => {
                            err ? reject(err) : resolve(messages)
                        })
                    });
                }
            }
        }
    })
});

module.exports = schema;
