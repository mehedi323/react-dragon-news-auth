  
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('news.json')
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/career',
          element: <Career></Career>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router;