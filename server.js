
var express = require('express');
const fetch = require('node-fetch');
var server = express();
server.use(express.static('public'));

// This sets up a route to localhost:3000/random and goes off and hits
// cat-fact.herokuapp.com/facts/random
server.get('/api', async (req, res) => {
    try {
      let paramName = {}
      if (req.params.state)
      paramName["state[id]"] = req.params.state
      if (req.params.q)
      paramName["q="] = req.params.q
      const apiResponse = await fetch(
        'https://projects.propublica.org/nonprofits/api/v2/search.json?' + new URLSearchParams(paramName)
      )
      const apiResponseJson = await apiResponse.json()
      // await db.collection('collection').insertOne(apiResponseJson)
      console.log(apiResponseJson)
      res.json(apiResponseJson)
    } catch (err) {
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  })
  

server.listen(8080);