import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResourceDefinition from './components/ResourceDefinition';
import SuperAdmin from './components/SuperAdmin';
import SystemMaster from './components/SystemMaster';
import TaskDefinition from './components/TaskDefinition';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/systemMaster" element={<SystemMaster />} />
      <Route path="/superAdmin" element={<SuperAdmin />} />
      <Route path="/taskDefinition" element={<TaskDefinition />} />
      <Route path="/resourceDefinition" element={<ResourceDefinition />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
