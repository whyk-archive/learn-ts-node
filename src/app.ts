import { ServerAPI } from './modules/server';

class Main {
  constructor() {
    const server = new ServerAPI();
    server.initServer();
  }
}

const main = new Main();