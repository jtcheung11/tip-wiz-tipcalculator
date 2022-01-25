const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


const {
    totalCalc,
    totalSplit,
    tipAmount,
    contactUs
} = require('./controller')

app.post('/split', totalSplit)
app.post('/calculate', totalCalc)
app.get('/tip', tipAmount)
app.post('/contact', contactUs)



const SERVER_PORT = 5500;
app.listen(SERVER_PORT, () => console.log(`Server up on ${SERVER_PORT}`));