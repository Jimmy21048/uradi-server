const express = require('express');
const cors = require('cors');
const conn = require('./config');
const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send("home page");
})
const signupRouter = require('./routes/signup');
app.use('/signup', signupRouter);

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

const accountRouter = require('./routes/account');
app.use('/account', accountRouter);

const detailsRouter = require('./routes/details');
app.use('/details', detailsRouter);

conn.connect((err) => {
    if(err) {
        console.log("Could not connect "+ err); 
        return;
    }
    console.log("DB up and running");
    app.listen(3000 , () => {
        console.log("As I live and breath! Server running");
    })
})