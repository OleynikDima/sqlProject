// import express from 'express';
const express = require('express')

class Server{
    constructor(){
       this.server = null
    }

     start(){
        console.log('this init start');

        this.initServer()
        this.initRouter()
        this.listen()
        this.initMiddleware()
    }
 
    initMiddleware() {
        this.server.use(express.json());
        console.log('this init Middle');
      }

    initServer(){
        this.server = express()
        console.log('this init server');
    }

    initRouter(){
        this.server.get('/',(req,res)=>{
        console.log('this init requre');
            return res.send('Hello')
        })
    }
     
    listen(){
        this.server.listen(3003,()=>{
            console.log('Server was run');
        })
    }
    
}

module.exports = Server;
