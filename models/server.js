const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoute = '/api/user'

        //Midlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){
        //Carepta pública
        this.app.use(express.static('public'))

        //Cors
        this.app.use(cors())

        //Lectura y Parseo del body
        this.app.use(express.json())
        
    }

    
    routes() {
        this.app.use(this.usuariosRoute, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor iniciado en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;