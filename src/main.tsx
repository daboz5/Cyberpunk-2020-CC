import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pathConstants from "./pathConstants.tsx";

import App from "./App.tsx";
import Landing from "./routes/Landing.tsx";

import Make from "./routes/Make.tsx";
import MakeBasic from "./routes/MakeBasic.tsx";
import MakeStats from "./routes/MakeStats.tsx";
import MakeSkills from "./routes/MakeSkills.tsx";

import Play from "./routes/Play.tsx";

import Rules from "./routes/Rules.tsx";
import RulesStart from "./routes/RulesStart.tsx";
import RulesAct from "./routes/RulesAct.tsx";
import RulesLive from "./routes/RulesLive.tsx";
import RulesStore from "./routes/RulesStore.tsx";
import RulesWorld from "./routes/RulesWorld.tsx";

import './index.css';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: pathConstants.LANDING,
    element: <Landing />,
  }, {
    path: pathConstants.MAKE.DEF,
    element: <Make />,
    children: [{
      path: pathConstants.MAKE.BASIC,
      element: <MakeBasic />,
    }, {
      path: pathConstants.MAKE.STATS,
      element: <MakeStats />,
    }, {
      path: pathConstants.MAKE.SKILLS,
      element: <MakeSkills />,
    }]
  }, {
    path: pathConstants.PLAY.DEF,
    element: <Play />,
  }, {
    path: pathConstants.RULES.DEF,
    element: <Rules />,
    children: [{
      path: pathConstants.RULES.START,
      element: <RulesStart />,
    }, {
      path: pathConstants.RULES.ACT,
      element: <RulesAct />,
    }, {
      path: pathConstants.RULES.LIVE,
      element: <RulesLive />,
    }, {
      path: pathConstants.RULES.STORE,
      element: <RulesStore />,
    }, {
      path: pathConstants.RULES.WORLD,
      element: <RulesWorld />,
    },]
  }]
}]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);