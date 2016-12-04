/**
  action
**/

import { findAll } from '../services/ajax';

let actions = {
  pickApple: () => (dispatch, getState) => {
    // 如果苹果正在请求，并且没有响应
    if (getState().isPicking)
      return;

    // 请求苹果
    findAll('/apples')
      .then(apples => action.pickAppleDone(apples))
      .catch(error => action.pickAppleFail(error));
  },

  // 请求苹果成功的动作
  pickAppleDone: (apples) => ({
    type: 'apple/PICK_APPLE_DONE',
    payload: apples
  }),

  // 请求苹果失败的动作
  pickAppleFail: (error) => ({
    type: 'apple/PICK_APPLE_FAIL',
    payload: error,
    error: true,
    meta: '请求苹果失败'
  }),

  // 吃苹果
  eatApple: (appleIndex) => ({
    type: 'apple/EAT_APPLE',
    payload: appleIndex
  })
};

export default actions;
