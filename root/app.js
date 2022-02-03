// import 
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db')
const Word = require('./controllers/word')
// app use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/api/words', Word);
app.get("/", (req, res) => {
    res.send('server working')
});
module.exports = app;