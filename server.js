import express from 'express';


class Server{
    constructor(){
       this.server = null
    }

     start(){
        this.initServer()
        this.initRouter()
        this.listen()
    }

    initServer(){
        this.server = express()
    }

    initRouter(){
        this.server.route('./',(req,res)=>{
            return 'Hello'
        })
    }
     
    listen(){
        this.server.listen(3003,()=>{
            console.log('Server was run');
        })
    }
    
}

module.exports = Server;
