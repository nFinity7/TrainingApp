import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import MainRouter from './components/MainRouter';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <MainRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();


