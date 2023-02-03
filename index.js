const express = require('express')
const app = express()
const port = 5000
const data = require('./fakedb.json')
var cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  res.send(data)
})

app.get('/details/:id', async(req, res)=>{
  const id = req.params.id
  const details =  data.find(dt => dt._id == id)
  res.send(details)
})
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  