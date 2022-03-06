const express = require('express');
const app = express();

const PORT = 1234; 

app.listen(PORT,(req,res)=>{
    console.log(`server is running on ${PORT}`)
})

