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
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import BookDetails from './Component/BookDetails.jsx';
import AddABook from './Component/AddABook.jsx';

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
        element:<AllBooks></AllBooks>,
        loader:()=>fetch('http://localhost:3000/allBooks')
      },
       
      {
        path:'/myBooks',
        element:<MyBooks></MyBooks>,
         
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/bookDetails/:id',
        element:<BookDetails></BookDetails>,
        loader:({params})=>fetch(`http://localhost:3000/bookDetails/${params.id}`)
      },
      {
        path:'/addABook',
        element:<AddABook></AddABook>
      },
       
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />,
      <ToastContainer></ToastContainer>
     </AuthProvider>
  </StrictMode>,
)
