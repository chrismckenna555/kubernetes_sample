var express = require('express')
var axios = require('axios')
var app = express()

app.get('/', function(req, res) {
    axios.get('http://kubernetes-sample-api:5000/message')
        .then(apiResp => {
            res.contentType = "text/html"
            res.status = 200
            res.send("<h1>" + apiResp.data.message + "</h1>")
         })
})

app.listen(3000, () => console.log(`app listening on port ${3000}!`))