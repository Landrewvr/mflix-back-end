require('dotenv').config();
const cors = require('cors');
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const appPort = process.env.APP_PORT;

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const moviesRouter = require('../routes/movies');

// app.use('/movies', moviesRouter);
app.use('/.netlify/functions/movies', moviesRouter);


// app.listen(appPort,() => console.log(`Listening to port ${appPort}`));

module.exports=app;
module.exports.handler = serverless(app);