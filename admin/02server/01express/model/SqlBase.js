let mysql = require("mysql"); //调用MySQL模块
class SqlBase {
  /**
   * 单例设计模式，当connection为空的时候
   */
  static getConnection() {
    if (!SqlBase.connection) {
      //1,创建连接
      SqlBase.connection = mysql.createConnection({
        host: "localhost", //主机 ip
        user: "root", //MySQL认证用户名
        password: "root", //MySQL认证用户密码
        port: "3306", //端口号
        database: "noi" //数据库里面的数据
      });
      //2,连接数据库
      SqlBase.connection.connect();
    }
    return SqlBase.connection;
  }

  end() {
    if (SqlBase.connection) {
      //关闭当前的连接
      SqlBase.connection.end();
      //给当前的连接置空
      SqlBase.connection = null;
    }
  }
}

module.exports = SqlBase;
