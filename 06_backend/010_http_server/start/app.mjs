import * as http from "http";

const server = http.createServer((req, res) => {
  console.log(req, res);
  res.end("hello nodemon");
});
server.listen(8080);
