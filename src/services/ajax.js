/**
  数据请求
**/

import superagent from 'superagent';
import { getQueryString } from '../lib/string.func';
let request = require('superagent-promise')(superagent, Promise);

const create = (url, dataSource) => {

};

const update = (url, dataSource, where) => {

};

const remove = (url, where) => {

};

const findAll = (url, query) =>
  request.get(url, getQueryString(query)).end()

const findOne = (url, query) =>
  findAll(url, query).then(data => data[0])

export {
  create,
  update,
  remove,
  findAll,
  findOne
};
