require('dotenv').config

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

const PORT = process.env.PORT || 8282

const app = express()

app.use(cors())
app.use(routes)
app.use(express.json())

const uri = 'mongodb+srv://dataUser:Amor2803@cluster0.czrpt.gcp.mongodb.net/data?retryWrites=true&w=majority'
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

app.listen(PORT, () => {
    console.log(`Server listening on http://locahost:${PORT}`)
})