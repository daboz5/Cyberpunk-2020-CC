import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PathConstants from "./routes/pathConstants";

import App from "./App.tsx";

import Landing from "./routes/Landing.tsx";
import Make from "./routes/Make.tsx";
import Play from "./routes/Play.tsx";
import Rules from "./routes/Rules.tsx";

import './index.css';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: PathConstants.LANDING,
    element: <Landing />,
  }, {
    path: PathConstants.MAKE.DEF,
    element: <Make />,
  }, {
    path: PathConstants.PLAY.DEF,
    element: <Play />,
  }, {
    path: PathConstants.RULES.DEF,
    element: <Rules />,
  },
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);