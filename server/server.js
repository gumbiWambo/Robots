const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on('connection', (ws, req) => {
  console.log(req.url);
});

app.use(express.static(`${__dirname}/dist/browser`))

app.get('/', async (req, res) => {
  res.status(200).sendFile('index.html');
});

server.listen(8080, '0.0.0.0', () => {
  console.log(`Server started on ${JSON.stringify(server.address())}`);
});