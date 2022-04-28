import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import MainRouter from './components/MainRouter';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <MainRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();


