import * as http from "http";

const server = http.createServer(function (req, res) {
  // if (req.url === '/hello') {
  //     res.end('hello');
  // } else if (req.url === '/bye'){
  //     res.end('bye')
  // }
  res.end(req.url.replace("/", ""));
  console.log(req.url);
});

server.listen(8080);
