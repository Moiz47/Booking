const express = require("express");
const connectMongoDb = require("./Connections/mongodb");
const app = express();
const tickets = require('./Routes/ticket')
const users = require('./Routes/users');
const transitInfo = require('./Routes/transitInfo')

app.use(express.json())
app.use('/api/ticket', tickets);
app.use('/api/users', users);
app.use('/api/transitinfo', transitInfo);

app.listen(9000, async () => {
  console.log("server is running");
  connectMongoDb()
    .then((data) => {
      console.log("connection to mongodb sucessful");
    })
    .catch((error) => {
      console.log("failed to connect to MongoDb", error);
    });
});
