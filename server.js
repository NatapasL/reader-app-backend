const express = require('express')
const request = require('request')
const queryString = require('query-string');
const URL = require('url').URL

const app = express()
const port = 5000
const router = express.Router();

router.get('*', (req, res) => {
  url = `https://fanboi.ch${req.originalUrl}`
  request(url, function (err, resp, body) {
    body = JSON.parse(body);    
    res.send(body)
  })
})

router.post('*', (req, res) => {
  url = `https://fanboi.ch${req.originalUrl}`
  request.post({ url: url, form: req.params }, function (err, resp, body) {
    body = JSON.parse(body);
    res.send(body)
  })
})


app.use('/api/1.0', router)
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}!`))