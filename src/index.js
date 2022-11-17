import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './app.scss';

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById( 'react-app' );
    if( typeof element !== 'undefined' && element !== null ) {
        ReactDOM.render(<App />, element);
    }
});