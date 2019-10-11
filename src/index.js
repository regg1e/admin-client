import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import memoryUtil from './utils/memoryUtil'
const user = JSON.parse(localStorage.getItem('user') || '{}')
memoryUtil.user = user

ReactDOM.render(<App />, document.getElementById('root'));

