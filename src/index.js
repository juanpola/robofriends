import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider} from 'react-redux';
import {createStore } from 'redux';
// import Card from './Card.js'
// import Cardlist from './Cardlist'
import App from './containers/App';
// import Hello from './Hello'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import { searchRobots } from './reducers'

const store = createStore(searchRobots)


ReactDOM.render(
  <React.StrictMode>
   <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// un egister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


