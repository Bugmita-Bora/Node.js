const http = require("http");

// -----OLD WAY-----------

// function requestListener(req, res) {
//   // pehla wala request dusra wala response lete h
//   console.log(req);
// }

// http.createServer(requestListener);

//---------NEW WAY-------------

// http.createServer(function (req, res) {
//   console.log(req);
// });

//---OR

const server = http.createServer((req, res) => {
  console.log(req);
});

// abb agr bss eaha tk likhke run krenge to kuch nhi hoga kyu? req bheji humne pr kou sunne ke lia v to hona chahye so first const server=..

// server.listen(3000); //3000 is port
// ap wapas terminal m pta nhi chlrha h ki server chla ki nhi to ye pta krne k lia

const Port = 3000;
server.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
