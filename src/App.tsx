import React from "react";
import {  RouterProvider } from 'react-router-dom'; import './App.css';
import 'antd/dist/reset.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import router from './routes';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
