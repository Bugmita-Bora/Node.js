const sumRequestHandler = (req, res) => {
  console.log("1.In Sum Request Handler", req.url);
  const body = [];
  let result;
  //issbar result waha define kia bahar jaise body ko ki akoi problem to nhi ani chaheye thi si.ce variable acccess he to krrhe h

  // but your sum is "undefined"??kyu
  // terminal m to aya h value jo ana chaheye
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2.Chunk came");
  });
  req.on("end", () => {
    console.log("3.end event");
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
  });
  console.log("4.Sending the request");
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>  
      <html>  
    `);
  return res.end();
};

exports.sumRequestHandler = sumRequestHandler;
