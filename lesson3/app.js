var express = require('express')
var cheerio = require('cheerio')
var superagent = require('superagent')

var app = express()

app.get('/', function (req, res, next) {
  superagent.get('https://www.house.gov/representatives')
    .end(function (err, sres) {
      if (err) {
        return next(err)
      }
      var $ = cheerio.load(sres.text)
      var items = []
      $('#state-texas').each(function (idx, element) {
        var $element = $(element)
        items.push({
          name: $element.attr('title'),
          href: $element.attr('href')
        })
      })

      res.send(items)
    })
})

app.listen(3000, function () {
  console.log('app is listening at port 3000')
})
