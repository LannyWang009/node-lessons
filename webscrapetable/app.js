var scraper = require('table-scraper')
var express = require('express')
var app = express()
app.get('/', function (req, res, next) {
  scraper
    .get('https://www.house.gov/representatives')
    .then(function (tableData) {
    //   console.log(tableData)
      var items = tableData
      res.send(items)

    /*
       tableData ===
        [
          [
            { State: 'Minnesota', 'Capitol City': 'Saint Paul', 'Pop.': '3' },
            { State: 'New York', 'Capitol City': 'Albany', 'Pop.': 'Eight Million' }
          ]
        ]
    */
    })
})

app.listen(3000, function () {
  console.log('app is listening at port 3000')
})
