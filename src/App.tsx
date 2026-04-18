import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import Home from "./Pages/home-page";
import Lesen from "./Pages/lesen";

import Horen from "./Pages/horen";

import LesenTeilPage from "./Pages/lesen-teil-page";
import HorenTeilPage from "./Pages/horen-teil-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true, //this means root+home is the default render
        element: <Home />,
      },

      {
        path: "lesen",
        element: <Lesen />,
      },

      {
        path: "lesen-teil/:teilId",
        element: <LesenTeilPage />,
      },

      {
        path: "horen",
        element: <Horen />,
      },

      {
        path: "horen-teil/:teilId",
        element: <HorenTeilPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
