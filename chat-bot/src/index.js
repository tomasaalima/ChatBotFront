import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css"
import App from './App';

import Home from './pages/home';
import Sobre from './pages/sobre';
import Tutorial from './pages/tutorial';
import ErrorPage from './pages/error';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/sobre",
//     element: <Sobre/>
//   },
//   {
//     path: "/tutorial",
//     element: <Tutorial/>
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/sobre",
          element: <Sobre/>
        },
        {
          path: "/tutorial",
          element: <Tutorial/>
        }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
);


