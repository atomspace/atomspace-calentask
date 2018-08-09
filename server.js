let Message = require("./mongoose/Message");
let path = require("path");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let express = require("express");
let graphqlHTTP = require("express-graphql");
let schema = require("./graphql/Schema/Schema");
let nconf = require("nconf");
nconf.argv().env().file({ file: "./config/main.json" });

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(`mongodb://${nconf.get("mongo:dbuser")}:${nconf.get("mongo:dbpassword")}@${nconf.get("mongo:host")}:${nconf.get("mongo:port")}/${nconf.get("mongo:db")}`, { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', () => {
    console.log('--FAILED')
});

db.once('open', () => {
    console.log('+++Connected to mongoose')
});

// start the server
app.get('/quotes', (req, res) => {

});

app.post('/quotes', (req, res) => {
    // Insert into TodoList Collection
    let message = new Message({
        text: req.body.text,
        from: req.body.room,
        time: Date.now(),
        author: req.body.name
    });
    message.save((err) => {
        if (err) throw err;
        console.log("+++ Message saved successfully");
        res.redirect('/')
    })
});
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: nconf.get("graphQL:showInterface")
}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve() + '/index.html');
});
app.listen(nconf.get("server:port"), () => {
    console.log("+++Express Server is Running!!!");
});
