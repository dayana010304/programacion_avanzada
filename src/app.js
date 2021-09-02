import express from 'express';
import { MongoServerClosedError } from 'mongodb';
import mongoose from 'mongoose';
const app = express()
const port = 3000

//middlewards
app.use(express.json());

app.get('/users', (req, res) => {
    console.log(req.query)
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.send('Hello Register!!')
})

app.put('/updateUser', (req, res) => {
    console.log(req.body)
    res.send('Hello Updater!!')
})

app.delete('/deleteUser', (req, res) => {
    console.log(req.body)
    res.send('Hello Delete!')
})

app.listen(port, async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/PRAvanzada', {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
    }
    catch(e){
        console.log("Error de conexion a la DB")
    }
    console.log(`Example app listening at http://localhost:${port}`)
})