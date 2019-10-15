let TeacherService = require("../services/TeacherService");
exports.imageUpload = function(req, res, fs, ip) {
  var responseJson = {
    code: "1" // 上传的文件信息
  };

  let name = req.body.name;
  let introduce = req.body.introduce;

  let src_path = req.files[0].path;
  let fileName = new Date().getTime() + ".jpg";
  let des_path = req.files[0].destination + fileName;

  fs.rename(src_path, des_path, function(err) {
    if (err) {
      throw err;
    }
    fs.stat(des_path, function(err, stat) {
      //成功的上传图片后，会调用当前方法
      if (err) {
        throw err;
      }
      let path = "/upload/imgs/" + fileName;
      let teacherService = new TeacherService();
      teacherService.insertTeacher(name, introduce, path, function(ob) {
        res.json(ob);
      });
    });
  });
};
