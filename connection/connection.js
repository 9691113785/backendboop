const mongoose = require('mongoose');

const URL = 'mongodb+srv://alokkushwaha96300:Alok2000@cluster0.ztxbbuz.mongodb.net/boppodatabase'

mongoose.connect(URL)
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))