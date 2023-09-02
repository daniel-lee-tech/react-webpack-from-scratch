import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx'

import './styles.css'

const reactEntry = document.querySelector('#react-entry');

const root = ReactDOM.createRoot(reactEntry)
root.render(<App />)