import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PathConstants from "./pathConstants.tsx";

import App from "./App.tsx";
import Landing from "./routes/Landing.tsx";

import Make from "./routes/Make.tsx";
import MakeBasic from "./routes/MakeBasic.tsx";
import MakeStats from "./routes/MakeStats.tsx";
import MakeSkills from "./routes/MakeSkills.tsx";

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
    children: [{
      path: PathConstants.MAKE.BASIC,
      element: <MakeBasic />,
    }, {
      path: PathConstants.MAKE.STATS,
      element: <MakeStats />,
    }, {
      path: PathConstants.MAKE.SKILLS,
      element: <MakeSkills />,
    }]
  }, {
    path: PathConstants.PLAY.DEF,
    element: <Play />,
  }, {
    path: PathConstants.RULES.DEF,
    element: <Rules />,
  }]
}]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);