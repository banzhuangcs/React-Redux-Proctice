/**
  数据请求
**/

import superagent from 'superagent';
import { getQueryString } from '../lib/string.func';
let request = require('superagent-promise')(superagent, Promise);

export const create = (url, dataSource) => {

};

export const update = (url, dataSource, where) => {

};

export const delete = (url, where) => {

};

export const findAll = (url, query) =>
  agent.get(url, getQueryString(query)).end()

export const findOne = (url, query) =>
  export.findAll(url, query).then(data => data[0])
