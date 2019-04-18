import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import createLoading from 'dva-loading';
import { createHashHistory } from 'history';
import router from './router';
import model from './model';
import * as serviceWorker from './serviceWorker';
import './common.scss';

const app = dva({
  ...createLoading({
    models: { tools: true },
    effects: true,
  }),
  history: createHashHistory(),
  onError() {}
});

app.router(router);

model.length && model.forEach(item => app.model(item));

app.start('#root');


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
