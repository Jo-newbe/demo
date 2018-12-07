const http = require("http");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.end("这是主页");
        break;
      case "/about":
        res.end("这是关于页面");
        break;
      case "/list":
        res.end("这是列表页面");
        break;
      default:
        res.end("Hello, World!");
    }
    // res.end('Hello, World!')
  })
  .listen(8080);
