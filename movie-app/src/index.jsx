import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./screens/App";
import 'antd/dist/antd.css';
import {StoreContext} from './states/Context';
import {RootStore} from './states/RootStore';

const rootStore = new RootStore();

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={rootStore}>
            <App/>
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

