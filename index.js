const express = require('express')
const app = express()
const path=require('path')
const MongoClient = require('mongodb').MongoClient
const port = process.env.PORT||3000
app.use(express.static(__dirname + '/dist/Bank'))
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/Bank/index.html'))
app.get('/data' , (req,res) => {
    // console.log(req.body);
    MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, { useUnifiedTopology: true }).then((db) => {
        const form = db.db("form")
        const accountholder = form.collection("accountholder")
            accountholder.find({}).toArray().then((result) => {
                console.log(result)
                res.send(result);
            }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))