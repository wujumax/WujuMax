//1,引入相关库
let express = require("express");
//2，获得express对象
let app = express();
//3,引入body-parser模块
let bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});
//5,设置静态文件
app.use(express.static("public"));
//6,设置跨域访问
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//上传文件需要的组件
var multer = require("multer");
var fs = require("fs");
//设置固定值
let ip = "http://localhost:";
let port = 8000;

var debug = require("debug")("my-application"); // debug模块
app.set("port", process.env.PORT || port); // 设定监听端口

//主页面
let indexController = require("./controllers/IndexController");
app.get("/index", indexController.index);

//播放页面
let playController = require("./controllers/PlayController");
app.get("/comment", playController.comment);

//用户模块
let adminController = require("./controllers/AdminController");
app.post("/adminCheck", urlencodedParser, adminController.check);
//4,进行监听

var fileController = require("./Controllers/FileController");

app.post(
  "/teacherAdd",
  multer({
    dest: __dirname + "/public/upload/imgs/"
  }).array("files"),
  function(req, res) {
    fileController.imageUpload(req, res, fs, ip + port);
  }
);
var server = app.listen(app.get("port"), function() {
  debug("Express server listening on port " + server.address().port);
});
