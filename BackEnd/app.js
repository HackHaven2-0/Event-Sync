const express = require('express');
const dotenv = require('dotenv');
const morgan  = require('morgan');
const cors = require('cors');
const connectDb = require('./src/config/db');
const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

connectDb()
app.get('/', (req, res) => {
    res.send('Welcome to the HackHaven 2.0 Backend!');
});
app.


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});