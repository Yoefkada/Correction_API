const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/notes', require('./routes/noteroutes'));
app.get('/hello', (req, res) => {
    res.send('Hello, Welcome to the API !');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port} !`)
});