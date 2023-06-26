const express = require('express')
const app  = express()

app.use(express.static('./public'))


app.get('/about',(req,res)=>{
    res.status(200).send("hello")
})

app.listen(5000,()=>{
    console.log('listening to port 5000')
})