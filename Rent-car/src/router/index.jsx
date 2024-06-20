import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import CategPage from "../pages/CategPage";

import ParamsPage from "../pages/paramsPage";
import AddForm from "../pages/AddForm";
import Contact from "../pages/Contact";

import MainAbout from "../pages/About";
import Conditions from "../pages/Condiions";
import ScrollToTop from "../components/ScrollTop";

export const router = createBrowserRouter([
  {
    path: "/",
  
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
          <ScrollToTop/>
          <Home />
          </>
        ),
      },
      {
        path: "/categ",
        element:(
          <>
          <ScrollToTop/>
          <CategPage />
          </>
        ) ,
      },
      {
        path: "/paramsPage/:id",
        element:(
          <>
          <ScrollToTop/>
           <ParamsPage />
          </>
        ),
      },
      {
        path: "/AddForm",
        element:(
          <>
          <ScrollToTop/>
          <AddForm />
          </>
         
        ) ,
      },
      {
        path: "/Contact",
        element:(
          <>
          <ScrollToTop/>
          <Contact />
          </>
        ) ,
      },
      {
        path: "/About",
        element:(
          <>
            <ScrollToTop/>
           <MainAbout />
          </>
         
        ),
      },
      {
        path: "/Conditions",
        element:(
          <>
          <ScrollToTop/>
          <Conditions/>
          </>
        ) ,
      },
    ],
  },
]);
