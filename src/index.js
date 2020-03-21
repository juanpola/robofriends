import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card.js'
// import Cardlist from './Cardlist'
import App from './App';
// import Hello from './Hello'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import './App.css'


ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// un egister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


