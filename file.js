const path = require('path');
const express = require('express');

const data = require(path.join(__dirname, "./questions/allQuestions.json"));
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(data);
})
app.get('/:topic', (req, res)=>{
    const topic = req.params.topic;
    let response = data.filter((object)=>{
        return object.Topic === topic;
    })
    res.send(response);
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})