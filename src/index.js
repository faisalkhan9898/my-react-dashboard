import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './common_componenet/Home';
import Dashbord from './components/Dashbord';
import Assignment from './components/Assignment';
import Studymaterial from './components/Studymaterial';
import Table from './components/Timetable';
import Timetable from './components/Timetable';
import Profiledetail from './components/Profiledetail';
import ClassSub from './components/ClassSub';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Dashboard',
    element:<Dashbord/>
  },
  {
    path:'/Assignment',
    element:<Assignment/>
  },
  {
    path:'/Study-material',
    element:<Studymaterial/>
  },
  {
    path:'/timetable',
    element:<Timetable/>
  },
   {
     path:'/profile',
     element:<Profiledetail/>
   },
   {
    path:'/class-and-subject',
    element:<ClassSub/>
   }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
