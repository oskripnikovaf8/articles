import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import { inDev } from './utils/helpers';
import whatInput from 'what-input';

if (whatInput.ask('intent') !== 'touch') {
    document.documentElement.classList.add('can-hover');
}

// Application to Render
const app = <Application />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();