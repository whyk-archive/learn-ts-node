"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class ServerAPI {
    initServer() {
        const server = http.createServer((request, response) => {
            this.requestHandler(request, response);
        });
        server.listen(5000);
    }
    requestHandler(request, response) {
        response.end('Call ServerAPI');
    }
}
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=server.js.map