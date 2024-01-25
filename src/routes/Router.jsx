import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutMe from "../Pages/Home/about me/AboutMe";
import Services from "../Pages/Home/what i do/services";
import Card from "../Pages/Home/Home/card/Card";
import Contact from "../Pages/Home/contact page/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path:"/about",
          element:<AboutMe/>
        },
        {
          path:"service",
          element:<Services/>
        },
        {
          path:"project",
          element:<Card/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    },
  ]);

export default router;