import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PathConstants from "./routes/pathConstants";

import Landing from "./routes/Landing.tsx";

import App from "./App.tsx";
import './index.css';
import Make from "./routes/Make.tsx";
import Play from "./routes/Play.tsx";


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: PathConstants.LANDING,
      element: <Landing />,
    },
    {
      path: PathConstants.MAKE.DEF,
      element: <Make />,
    },
    {
      path: PathConstants.PLAY.DEF,
      element: <Play />,
    },
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);