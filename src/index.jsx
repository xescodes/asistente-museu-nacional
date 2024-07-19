// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import './i18n';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);