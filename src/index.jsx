import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"

const root = document.getElementById('root');

const rootElement = ReactDOM.createRoot(root);

rootElement.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

