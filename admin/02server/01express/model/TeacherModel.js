//引入模块
let SqlBase = require("./SqlBase");
class TeacherModel extends SqlBase {
  constructor() {
    super();
  }

  insert(name, introduce, key, callback) {
    //1,编写sql语句
    let sql = `insert into teachers(name,introduce,tkey)values('${name}','${introduce}','${key}')`;

    //2,进行插入操作

    SqlBase.getConnection().query(sql, function(err, result) {
      if (err) {
        console.log("[增加老师] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  check(name, callback) {
    //1,编写sql语句
    let sql = `select * from admin where name='${name}'`;

    //2,进行插入操作

    SqlBase.getConnection().query(sql, function(err, result) {
      if (err) {
        console.log("[查询] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = TeacherModel;
