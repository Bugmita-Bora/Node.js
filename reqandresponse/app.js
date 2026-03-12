//..........................REQUEST...................//

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   //url mein sirf / print huwa kyu?jo port ki address wo machine tk lata h usko url ka part nhi mante..uske baad agr kuch givem h wo url h ... to agr nhi hota h to '/' print karwata h..inshort port k baad jo v likhoge wo url m ayega

//   //method mein GET print huwa
//   // headers mein baki sb aya
// });

// const Port = 3000;
// server.listen(Port, () => {
//   console.log(`Server is running at http://localhost:${Port}`);
// });

//.................RESPONSE.................//

// const http = require("http");
// //res khali thela issmein jo v ayega bahar k bhej dena
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Coding</title></head>");
//   res.write("<body><h1>eat and code</h1></body>");
//   res.write("</html>");

//   res.end();
//   // abhi aisa ro rh a h ki ap koi v response leke ao hum to ye he response denge
// });

// const Port = 3000;
// server.listen(Port, () => {
//   console.log(`Server is running at http://localhost:${Port}`);
// });

// .........RESPOSNE BASED ON URL.............//

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);

//   if (req.url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Coding</title></head>");
//     res.write("<body><h1>Welcome To Home</h1></body>");
//     res.write("</html>");
//     return res.end(); //agr return mhi likhte jo iske baad wala setheader nhi krskte kyuki response end ho chuka h
//     //res.end()
//     // return bhi likhskte h
//   } else if (req.url === "/products") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Coding</title></head>");
//     res.write("<body><h1>Checkout Our Products</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Coding</title></head>");
//   res.write("<body><h1>eat and code</h1></body>");
//   res.write("</html>");

//   res.end();
// });

// const Port = 3000;
// server.listen(Port, () => {
//   console.log(`Server is running at http://localhost:${Port}`);
// });

// .........RESPOSNE BASED ON USERINPUT.............//

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Coding</title></head>");
    res.write("<body><h1>Enyer Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>', //form bad m data collect m username(name) mein data add hoga isiloye yelia html css mein padha tha but still
    );
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">'); //server radio m gender lega to value female and male value lega
    res.write('<br><input type="Submit" value="Submit">');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  //..............REDIRECTING-REQUESTS---------------//
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) //.toLowerCase agr koi glti se capital mein v likhe to smjh jaye

  //  aur submit clikc k baad data leke he jayega isiliye &&req.method=POST
  {
    fs.writeFileSync("user.text", "Bugmita Bora");
    res.statusCode = 302;
    // The requested resource has temporarily moved to another URL. Go there.
    res.setHeader("Location", "/"); // / menas homepage m chlejana]
  }

  res.end();
});

const Port = 3000;
server.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});

// fs.writeFile() → Asynchronous
// fs.writeFileSync() → Synchronous
// fs.writeFileSync("user.txt", "Bugmita Bora");
// this blocks the server until the file is written.
// Flow becomes:
// User submits form
// Server writes file completely
// Then redirect happens
// So the redirect will definitely happen after file writing.
// It is easier for beginners or learning because the execution is top → bottom.

//........... Why redirect is needed??........

// If you don't redirect, the browser will stay on /submit-details.

// And if the user refreshes the page, the browser will resubmit the POST request again (form resubmission problem).

// Redirecting solves this.

// Post → Redirect → Get
