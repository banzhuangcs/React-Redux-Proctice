/**
  入口文件
**/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers/reducer';
import AppleApp from './AppleApp';


// 初始化store
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppleApp />
      </Provider>
    );
  }
}

// 渲染
const render = () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
}

store.subscribe(render);

render();
