/**
  字符串操作
**/

/**
 * 对象组装成key1=value1&key2=value2
 * @param { Object } obj 对象
 * @return { String }
*/
export const getQueryString = (obj) => {
  return Object
    .keys(obj)
    .map(key => key + '=' + obj[key])
    .join('&');
};
