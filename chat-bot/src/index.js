import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css"
import App from './App';

<<<<<<< HEAD
import Home from './pages/Home';
import Sobre from './pages/About';
import Tutorial from './pages/Tutorial';
import ErrorPage from './pages/Error';
import Chat from './pages/Chat';
=======
import Home from './pages/home';
import Sobre from './pages/sobre';
import ErrorPage from './pages/error';
>>>>>>> 41d87f89f2ab9ed52156d1cf3f06c2d1c32be4e5

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
<<<<<<< HEAD
        {
          path: "/tutorial",
          element: <Tutorial/>
        },
        {
          path: "/chat",
          element: <Chat/>
        }
=======
>>>>>>> 41d87f89f2ab9ed52156d1cf3f06c2d1c32be4e5
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
);


