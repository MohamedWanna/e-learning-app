const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require("./config/connectDB")
const app = express()
app.use(express.json())
const port = process.env.port||5000
connectDB()

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(cors())

app.use("/session",require("./routes/sessionRoutes"))
app.use("/user",require("./routes/userRoutes"))



app.listen(port,(err)=>
err ? 
console.log(err) :
console.log(`Server is running on port ${port}!`))