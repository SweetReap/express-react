const e = require('express')
const express = require('express')
// const cors = require('cors')
const app = express()
const port = 3000

//giving express app the pass to use my images and client folder(and later cors)
app.use(express.static('public'))
// app.use(cors)

const root = require('path').join(__dirname, '../client','dist')
app.use(express.static(root))

//server routes
app.get('/', (req,res)=>{
  res.sendFile('index.html', {root})
  res.send("The bluetooth device is running successfully!")
})

app.get('/test', (req, res) => {
  //testing page for server connection
  res.send("Test Page :D")
})

//sends info to specific page in server
app.post('/api', (req,res) =>{

})

//run server in port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})