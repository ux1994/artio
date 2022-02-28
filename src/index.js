import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Stake,
  Bond,
  Header,
  Dashboard,
  Nft,
} from "./components";
import Homepage from './components/Homepage';
ReactDOM.render(
  <Router>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Bond" element={<Bond />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Stake" element={<Stake />} />
          <Route path="/Nft" element={<Nft />} />
        </Routes>
      </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
