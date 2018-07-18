const express = require('express')

const bodyParser = require('body-parser')

const cookirParse = require('cookie-parser')

const userRouter = require('./user')
const poetryRouter = require('./poetry')
const attentionlistRouter = require('./attentionlist')

const app = express()

app.use(cookirParse())
app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())

app.use('/poetry', poetryRouter)
app.use('/user', userRouter)
app.use('/attentionlis', attentionlistRouter)

app.listen(9094, function(){
  console.log('Node app start at port  9094')
})
