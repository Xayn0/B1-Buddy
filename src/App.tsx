import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import Home from "./Pages/home-page";
import Lesen from "./Pages/lesen";
import LesenTeil from "./Pages/lesen-teil";
import Horen from "./Pages/horen";
import HorenTeil from "./Pages/horen-teil";


//? ROUTING STURCTURE
// / → RootLayout + Home
// /lesen → RootLayout + Lesen
// /lesen/:teilId → RootLayout + LesenTeil
// /horen → RootLayout + Horen
// /horen/:teilId → RootLayout + HorenTeil
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,//this means root+home is the default render
        element: <Home />,
      },

      {
        path: "lesen",
        element: <Lesen />,
      },

      {
        path: "lesen/:teilId",
        element: <LesenTeil />,
      },

      {
        path: "horen",
        element: <Horen />,
      },

      {
        path: "horen/:teilId",
        element: <HorenTeil />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
