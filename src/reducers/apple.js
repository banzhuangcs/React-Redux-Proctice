/**
  apple reducer
**/

/*
  数据结构是
    {
      isPicking (boolean) => 是否摘完苹果
      apples: [
        {
          id (string)
          weight (number)
          isEated (string) => 用来标识该苹果是否被吃
        }
      ]
   }

  @TODO
    payload(Array|Object) => 产生的数据
    error(boolean) => 是否是错误
    meta(string) => 本次操作的说明
*/
export default (state = {}, action) => {
  switch (action.type) {
    // 吃苹果
    case 'apple/EAT_APPLE':
      return Object.assign({}, state, {
        apples: [
          ...state.apples.slice(0, action.payload),
          Object.assign({}, state.apples[action.payload], { isEated: true }),
          ...state.apples.slice(action.payload + 1)
        ]
      });

    // 摘苹果成功
    case 'apple/DONE_PICK_APPLE':
      return Object.assign({}, state, {
        isPicking: true,
        apples: [
          ...state.apples,
          ...action.payload
        ]
      });

    // 摘苹果失败
    case 'apple/FAIL_PICK_APPLE':
      return Object.assign({}, state, {
        isPicking: false
      });

    default:
      return state;
  }
}
