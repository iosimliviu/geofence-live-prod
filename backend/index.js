const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const model = require("./models/index");
const indexRouter = require("./routes/index");
const session = require("client-sessions");

const app = express();
let port = 8081;

const configure = app => {
    const corsOptions = {
        origin: true,
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Access-Control-Allow-Methods",
            "Access-Control-Request-Headers",
        ],
        credentials: true,
        enablePreflight: true,
    };
    app.use(cors(corsOptions));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8081/')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
        next()
    })
    app.use(bodyParser.json());

    app.use(
        session({
            cookieName: "session",
            secret: "notguessablecookiekey",
            duration: 7200000,
            activeDuration: 300000,
            httpOnly: true,
            ephemeral: true
        })
    );

    app.use("/api", indexRouter);
    model.sequelize.sync();
};

configure(app);

module.exports = configure;



const test = async (req, res) => {
console.log("called test")
    res.status(200).send({ message: "Hello from server" });

    
  };

app.get('/api/test', test)

app.listen(port, () => {
    console.log("Server listens on " + port);
});