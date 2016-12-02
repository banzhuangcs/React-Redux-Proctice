/**
  action
**/



export default {
  pickApple: () => (dispatch, getCurrentState) => {
      
  },

  pickAppleDone: apples => ({
    type: 'apple/DONE_PICK_APPLE',
    payload: apples
  }),

  pickAppleFail: error => ({
    type: 'apple/FAIL_PICK_APPLE',
    payload: error,
    error: true
  }),

  eatApple: appleId => ({
    type: 'apple/EAT_APPLE',
    payload: appleId
  })
};
