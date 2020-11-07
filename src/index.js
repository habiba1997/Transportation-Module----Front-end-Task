import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import Form from './components/form';
import store from './store/store';
import {Provider } from 'react-redux';
// import  * as actions from './store/actions';



// store.dispatch(actions.getCompanyList({
//   url: "/api/TransportationCompany/All",
//   onSuccess: "callSuccess", 
//   onError: "callFailed"
// }));
// console.log(store.getState());

ReactDOM.render(
  <Suspense fallback={<div>Loading ........</div>}>
    <Provider store={store}>
      <App/>
      {/* <BrowserRouter>
        <div>
            <Route exact path="/" component = {App}/>
            <Route path = "/form" component = {Form} />

        </div>
      </BrowserRouter> */}
    </Provider>
   </Suspense>
   ,
  document.getElementById('root')
);


reportWebVitals();
