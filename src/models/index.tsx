import { create } from 'dva-core';
import createLoading from 'dva-loading';
import React from 'react';
import { Provider } from 'react-redux';
import { Dispatch } from './connect';
import global from './global';
import home from './home';

const app = create();
app.use(createLoading());
[global, home].forEach(app.model);
app.start();

export const dispatch: Dispatch = app._store.dispatch;

export default class DvaContainer extends React.Component {
  render() {
    return <Provider store={app._store}>{this.props.children}</Provider>;
  }
}
