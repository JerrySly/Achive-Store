const express = require('express');
const cors = require('cors')


const server = express();
server.use(cors());
server.use(express.json())
const PORT = 5000;

server.get('/test',(req,res)=>{
    let {id} =  req.query;
    res.json(`id:${id}`);
    res.end();
})





server.listen(PORT, () =>{
    console.log('Server started');
})