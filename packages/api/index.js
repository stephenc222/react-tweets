require('dotenv').config()
const express = require('express')
const getTweets = require('./getTweets')
const app = express()

const PORT = 8000
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (req, res) => {
  try {
    getTweets()
      .then(data => {
        console.log({ data })
        res.send(data)
      }
        , err => console.error(err))
      .catch(err => console.error(err))
  } catch (e) {
    console.log({ e })
    res.status(400).send({ error: 'something went wrong' })
  }
})

app.listen(PORT, () => console.log(`api listening on port ${PORT}!`))