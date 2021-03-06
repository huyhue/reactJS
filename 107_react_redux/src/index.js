import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store1 from './Store';
ReactDOM.render(
    //Kết nối để dùng store1 bất kỳ component nào
    <Provider store={store1}>
        <App/>
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
