import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login.jsx';


const router = createBrowserRouter([
  {

    path:"/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/hero',
        element:<div> <h4> it's hero time</h4></div>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    ],

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
