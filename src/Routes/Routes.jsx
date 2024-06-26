import { createBrowserRouter } from  "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Loging/Login";
import SingUp from "../pages/SingUp/SingUp";


const router = createBrowserRouter([
{
  path: "/",
  element:<Main></Main>,
  children:[
    {
      path: '/',
      element: <Home></Home>              
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'singup',
      element: <SingUp></SingUp>
    }               
  ]
},
 ]);
export default router;               