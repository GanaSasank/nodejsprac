var http = require("http");
var fs = require("fs");
var dt = require("./datatime");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("Today date and time is " + dt.myDateTime());
    res.write("Hello World");
    res.write(req.url);
    // fs.appendFile("./sample.txt", "I am Gana", function (err) {
    //   if (err) return err;
    //   console.log("Wrote!!!!!!!!!!");
    // });
    // fs.unlink("./sample.txt", function (err) {
    //   if (err) return err;
    //   console.log("Deleted");
    // });
    res.end();
  })
  .listen(8080);
