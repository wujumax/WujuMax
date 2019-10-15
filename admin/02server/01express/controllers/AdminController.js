let AdminService = require("../services/AdminService");
module.exports.check = function(req, res) {
  //解析前端请求数据
  let name = req.body.name;
  let passwd = req.body.passwd;
  //创建业务对象
  let adminService = new AdminService();
  //检测用户的合法性
  adminService.check(name, passwd, function(ob) {
    res.json(ob);
  });
};
