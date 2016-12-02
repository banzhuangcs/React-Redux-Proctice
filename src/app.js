/**
  入口文件
**/

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers/reducer';
import action from './action/action';
