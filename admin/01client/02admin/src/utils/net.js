import axios from "axios";
import qs from "qs";
import { ip, port } from "./config";
const serverUrl = ip + port + "/";

let net = {
  get: "",
  post: "",
  uploadFile: ""
};
net.get = function(api, object, call) {
  //1,封装请求地址
  let url = serverUrl + api;
  //2,根据请求地址和请求数据发出请求

  console.log(url);
  axios
    .get(url, {
      params: object
    })
    .then(function(response) {
      call(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

net.post = function(api, object, call) {
  //1,封装请求地址
  let url = serverUrl + api;
  console.log(url);
  axios
    .post(url, qs.stringify(object))
    .then(function(response) {
      if (response.status === 200) {
        call(response.data);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};
net.uploadFile = function(api, object, call) {
  //封装请求地址
  let url = serverUrl + api;

  //创建form对象
  let param = new FormData();

  for (let key in object) {
    //如果当前的键是fileList，说明传递的是文件
    if (key == "fileList") {
      param.append("files", object[key]);
    } else {
      param.append(key, object[key]);
    }
  }

  let config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }; //添加请求头
  axios.post(url, param, config).then(response => {
    call(response.data);
  });
};

export default net;
