/**
  action
**/

import { bindActionCreators } from 'redux';

export default (dispatch) => bindActionCreators({
  // 发出请求苹果的动作
  pickApple: (dispatch, getCurrentState) => {
              
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
}, dispatch);
