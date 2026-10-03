require('dotenv').config()
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 8000;

app.use(express.json());

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

app.post('/submitData' , async (req, res) => {
    try {
        const formData = req.body;

        await client.connect();
        const db = client.db('testDatabase');
        const collection = db.collection('data');

        const uploadData = (await collection.insertOne(formData));

        console.log(uploadData.insertedId);
    } catch(err) {
        console.log(err)
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})