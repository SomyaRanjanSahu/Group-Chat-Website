import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7icW9bsrctB7DNuEKryxIGRxX1XjdZJo",
  authDomain: "group-chat-app-53b58.firebaseapp.com",
  databaseURL: "https://group-chat-app-53b58-default-rtdb.firebaseio.com",
  projectId: "group-chat-app-53b58",
  storageBucket: "group-chat-app-53b58.appspot.com",
  messagingSenderId: "404054239282",
  appId: "1:404054239282:web:ddd8d115a33266e1d4f42b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
