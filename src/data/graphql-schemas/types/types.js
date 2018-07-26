const typeDefs = [`
    type Query {
        user(_id: String): Message
        room(_id: String): Room
        message(_id: String): Message
        users: [User]
        rooms: [Room]
        messages: [Message]
    }

    type User {
        _id: String
        username: String
        name: String
        password: String
    }

    type Room {
        _id: String
        roomName: String
        password: String
    }

    type Message {
        _id: String
        text: String
        from: String
        author: String
        time: String
    }

    schema {
        query: Query
    }
`]

export default typeDefs;