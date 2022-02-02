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
 
    initMiddleware() {
        this.server.use(express.json());
      }


    initServer(){
        this.server = express()
    }

    initRouter(){
        this.server.get('/',(req,res)=>{
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
