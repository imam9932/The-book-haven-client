import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Component/Home/Home.jsx';
import AllBooks from './Component/AllBooks.jsx';
import AddBook from './Component/AddBook.jsx';
import MyBooks from './Component/MyBooks.jsx';
import Register from './Component/Register.jsx';
import Login from './Component/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allBooks',
        element:<AllBooks></AllBooks>
      },
      {
        path:'/addBook',
        element:<AddBook></AddBook>
      },
      {
        path:'/myBooks',
        element:<MyBooks></MyBooks>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
