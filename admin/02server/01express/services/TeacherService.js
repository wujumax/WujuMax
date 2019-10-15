let TeacherModel = require("../model/TeacherModel");
class TeacherService {
  constructor() {
    this.teacherModel = new TeacherModel();
  }
  insertTeacher(name, introduce, key, callback) {
    this.teacherModel.insert(name, introduce, key, function(ob) {
      callback(ob);
    });
  }
}

module.exports = TeacherService;
