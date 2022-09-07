const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f1ag36g.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const usersCollection = client.db('vpromise-database').collection('users');

        // console.log('everything is ok');
        // app.get('/users/:phone', async (req, res) => {
        //     const phone = req.params.phone;
        //     const query = { number: phone };
        //     const result = await usersCollection.findOne(query);
        //     res.send(result);
        // })
    }
    finally {

    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from ImageBook server side!');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})