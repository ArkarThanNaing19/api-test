const express = require('express')

const routes = require('./routes');

const {port} = require('./config');

const app = express()

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
    console.log("Server Listening on port:", port);
});

