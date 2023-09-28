const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
const product_routes = require('./routes/product')
let data = [
    
]
app.get('/', (req, res) => {
    return res.status(200).json({ status: true, data, message: "data get successfully" })
})

app.use('/api/getproduct', product_routes)

app.listen(port, () => {
    console.log("listening on port" + port)
})