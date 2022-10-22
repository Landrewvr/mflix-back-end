require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const appPort = process.env.APP_PORT;

app.use(express.json());
app.use(cors());

const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);

app.listen(appPort,() => console.log(`Listening to port ${appPort}`));