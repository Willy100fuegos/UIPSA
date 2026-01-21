
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Services from "../pages/services/page";
import Certifications from "../pages/certifications/page";
import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quienes-somos",
    element: <About />,
  },
  {
    path: "/servicios",
    element: <Services />,
  },
  {
    path: "/certificaciones",
    element: <Certifications />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
