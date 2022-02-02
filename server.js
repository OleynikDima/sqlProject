import express from 'express';


const app = express()

app.route('./',(req,res)=>{
    return 'Hello'
})

app.listen(3003,()=>{
    console.log('Server was run');
})