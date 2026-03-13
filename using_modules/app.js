const http = require("http");
const ReqHandler = require("./user");

const server = http.createServer(ReqHandler);
const Port = 3003;

server.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
