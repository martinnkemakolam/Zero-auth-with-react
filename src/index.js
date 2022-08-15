import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App'

ReactDOM.render(
  <Auth0Provider
  domain='dev-v9k12-eb.us.auth0.com'
  clientId='wTaPv795hqsU52DImuhfOjxXbc9D6erf'
  redirectUri={window.location.origin}>
    <App/>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

