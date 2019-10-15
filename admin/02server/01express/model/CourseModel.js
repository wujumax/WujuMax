//引入模块
let SqlBase = require("./SqlBase");
class CourseModel extends SqlBase {
  constructor() {
    super();
  }
  getAllCourse(callback) {
    //3,编写sql语句
    let sql = "select * from courses";

    SqlBase.getConnection().query(sql, function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = CourseModel;
