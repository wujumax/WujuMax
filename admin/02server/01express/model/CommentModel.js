//引入模块
let SqlBase = require("./SqlBase");
class CommentModel extends SqlBase {
  constructor() {
    super();
  }
  getConmentsByCourseId(courses_id, callback) {
    let sql = `select * from comments left join users on comments.user_id=users.id where comments.courses_id=${courses_id} `;

    SqlBase.getConnection().query(sql, function(err, result) {
      if (err) {
        console.log("[查询] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = CommentModel;
