import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import {Provider } from 'react-redux';


ReactDOM.render(
  <Suspense fallback={<div>Loading ........</div>}>
    <Provider store={store}>
      <App/>
    </Provider>
   </Suspense>
   ,
  document.getElementById('root')
);


reportWebVitals();
