import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import logo from './assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/reset.css';
import './assets/css/index.css';
import { Header } from './components/header';
import { Footer } from './components/footer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <Header logo={logo} />
    <App />
    <Footer logo={logo} />
  </>
);

