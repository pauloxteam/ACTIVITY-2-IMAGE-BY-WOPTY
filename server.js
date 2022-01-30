///////////////////////////////////



//CreateBy Wopty
//Dont Share This Code Without Permission




///////////////////////////////////

const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("TUNGGU 2 MENIT UNTUK PENGECEKAN")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("ACTIVITY BY WOPTY HAS BEEN ACTIVE")});
}
module.exports = keepAlive


///////////////////////////////////



 
//CreateBy Wopty
//Dont Share This Code Without Permission




///////////////////////////////////