import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import "./i18n/configs"
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.headers['x-icode'] = 'AC2ABA7CAD4E65B6';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

