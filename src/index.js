import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './common_componenet/Home';
import Dashbord from './components/Dashbord';
import Assignment from './components/Assignment';
import Studymaterial from './components/Studymaterial';
import Timetable from './components/Timetable';
import Profiledetail from './components/Profiledetail';
import ClassSub from './components/ClassSub';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/study-material" element={<Studymaterial />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/profile" element={<Profiledetail />} />
        <Route path="/class-and-subject" element={<ClassSub />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
