const cors = require('cors')
const express = require('express')
// const stripe = require('stripe')("")
const { v4: uuidv4 } = require('uuid');


const app = express()


//middleware
app.use(express.json())
app.use(cors())


//routes
app.get("/", (req, res)=> {
    res.send("It WORKS")
})

//listen
app.listen(8000, ()=> {console.log("Listeng @ PORT 8000")})