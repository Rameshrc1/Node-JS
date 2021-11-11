const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const severPort = process.env.PORT || 5000;
dotenv.config();
app.use(bodyParser.json({ limit: "50mb" }));

const db = require("./config/database");
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log("Error: " + err));

app.use('/operations',require('./routes/operationR'));
app.use('/mysql',require('./routes/mysqlR'));




app.listen(severPort, () => {
    console.log(`Server is up at ${severPort}`);
});