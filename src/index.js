import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAmlL_G8xF-x-ekac1ojgM7MgGC3mC9Rg",
  authDomain: "react-chat-app-507ab.firebaseapp.com",
  databaseURL: "https://react-chat-app-507ab-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-507ab",
  storageBucket: "react-chat-app-507ab.appspot.com",
  messagingSenderId: "667774102701",
  appId: "1:667774102701:web:90528a2a558a868fc8ea24"
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
