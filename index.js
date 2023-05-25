const express = require('express');
require('./connection/connection');
const cors = require('cors')

const sturouter = require('./controller/users')

const app = express();
app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(sturouter);



app.listen(8000, ()=>{
    console.log("Server Connected")
})