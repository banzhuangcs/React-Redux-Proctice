/**
  数据生成文件
**/

var Mock = require('mockjs');

module.exports = function () {
  return {
    apples: Mock.mock({
      'isPicking': false,
      'apples|15-35': [{
        'id|+1': 0,
        'weight|150-350': 0,
        'isEated': false
      }]
    })
  };
}
