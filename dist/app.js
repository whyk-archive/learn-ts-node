"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./modules/server");
class Main {
    constructor() {
        const server = new server_1.ServerAPI();
        server.initServer();
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map