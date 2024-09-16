require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("Hanji!, Humne bhi server bana liya hai.")
})

app.get('/youtube', (req,res) => {
    res.send("<h1>Hitaansh Maheshwary this side</h1>")
})

app.get('/chai', (req,res) => {
    res.send("Ek kaam ker tu mujhe call ker, mere samsung ke number pe mujhe call ker.")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})