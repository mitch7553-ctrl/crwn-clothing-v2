import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// import { UserProvider } from './context/user.context';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cart.context';
import  {Provider} from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {/* <UserProvider> */}
    <CartProvider>
    <App />
    </CartProvider>
    {/* </UserProvider> */}
  </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
