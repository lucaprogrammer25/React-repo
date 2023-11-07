import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SWRConfig } from 'swr';
import {BrowserRouter} from "react-router-dom"
import './index.css'

const fetcher = url => fetch(url).then(res => res.json());

const root = document.getElementById('root');

const rootElement = ReactDOM.createRoot(root);

rootElement.render(
    <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>
);

