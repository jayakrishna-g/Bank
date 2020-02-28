const express = require('express')
const app = express()
const path=require('path')
const port = process.env.PORT||3000
app.use(express.static(__dirname + '/dist/Bank'))
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/Bank/index.html'))
app.get('/data' , (req,res) => {
    // console.log(req.body);
    
    res.send([{ "message": "abc"}]);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))