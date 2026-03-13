const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Coding</title></head>");
    res.write("<body><h1>Enyer Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>',
    );
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<br><input type="Submit" value="Submit">');

    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    // ................READINGCHUNKS.............//

    // req.on("data", (chunk) => {
    //   console.log(chunk);
    // });

    //req.on mtlb mein listen krna chahta hu kb?jb naya data ayega..mtlb agr naya data ayega to batana ...theek h lekin h batayega kasie?so use callback

    // isse bss gibberish print hoga ye print huwa <Buffer 75 73 65 72 6e 61 6d 65 3d 62 75 67 26 67 65 6e 64 65 72 3d 66 65 6d 61 6c 65>so niche wlale method se likho

    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      //concat mtlb jitne v chunks h jor ke ek ko
      console.log(fullbody);
    });

    //ismeinn () argument nhi dala? kyuki dekho signal jb khtm hoga tb mujhe bss bolna h ki khmt huwa ..chunk to already le chuke h body m ..gharwale jb bye bolte h tb kuch milta thori h bye bss signal h ki chlo hoygya tumhara

    fs.writeFileSync("user.text", "Bugmita Bora");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  res.end();
});

const Port = 3000;
server.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
