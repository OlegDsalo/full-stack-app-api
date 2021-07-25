import express from 'express';
import cors from "cors";

// const express = require('express');
// var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())


app.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'hello world' })
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

