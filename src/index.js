import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './hooks/context/AuthProvider';
import { CartProvider } from './hooks/context/CartProvider'
import store from "./redux/store"
import {Provider} from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <CartProvider>
          <App />
        </CartProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

