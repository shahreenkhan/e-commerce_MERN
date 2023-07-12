import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { Link } from 'react-router-dom';
import Store from './Store';
// (react-redux) redux or react ka communication krata h

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}> 
    <App />
    </Provider>
 
);

