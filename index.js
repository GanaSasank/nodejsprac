// var http = require("http");
// var fs = require("fs");
// var dt = require("./datatime");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-type": "text/html" });
//     res.write("Today date and time is " + dt.myDateTime());
//     res.write("Hello World");
//     res.write(req.url);
//     // fs.appendFile("./sample.txt", "I am Gana", function (err) {
//     //   if (err) return err;
//     //   console.log("Wrote!!!!!!!!!!");
//     // });
//     // fs.unlink("./sample.txt", function (err) {
//     //   if (err) return err;
//     //   console.log("Deleted");
//     // });
//     res.end();
//   })
//   .listen(8080);
var http = require("http");
var url = require("url");
var fs = require("fs");
http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not found");
      }
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
