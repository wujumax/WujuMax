//引入模块
let AdminModel = require("../model/AdminModel");

class AdminService {
  constructor() {
    this.adminModel = new AdminModel();
  }
  check(name, passwd, callback) {
    let ob = {
      code: -1,
      msg: "用户不存在，请注册账号"
    };
    this.adminModel.check(name, function(result) {
      //如果取出的数组是空的
      if (result.length == 1) {
        //取出对象
        let buffer = result[0];
        if (buffer.passwd === passwd) {
          ob.code = 1;
          ob.msg = "合法用户";
          ob.user = buffer;
        } else {
          ob.code = 0;
          ob.msg = "密码错误，请重新输入";
        }
      }
      callback(ob);
    });
  }
}

module.exports = AdminService;
