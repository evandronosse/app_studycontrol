import express from 'express';
import cors from 'cors'
import routes from './routes'

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }
  middleware() {
    this.server.use(cors({ credentials: true, origin: ['http://localhost:3000','http://localhost:3333','http://localhost:9000']}));
    this.server.use(express.json());

  }
  routes(){ 
    routes(this.server)
  }

}

export default new App().server;
