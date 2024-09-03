var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));
console.log(__dirname);


app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


// POST Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.post('/api', async (req, res) => {
    const { url } = req.body;
    const apiKey = process.env.API_KEY; 
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${encodeURIComponent(url)}&lang=en`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error MeaningCloud API response ${response.statusText}`);
        }
        const data = await response.json();
        res.json(data); 
    } catch (e) {
        console.error('error',e);
    }
});
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


