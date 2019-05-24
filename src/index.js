import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './app/root';
import store from './app/store/reducers';

const root = document.getElementById('root');
function renderToDOM() {
  ReactDOM.hydrate(
    <Root store={store} Router={BrowserRouter} />,
    root || document.createElement('DIV'),
  );
}
renderToDOM();
export { renderToDOM as default };
