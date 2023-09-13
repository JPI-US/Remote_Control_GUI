import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<HomePage />, document.getElementById('root'));
serviceWorkerRegistration.register();
