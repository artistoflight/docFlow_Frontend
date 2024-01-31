import React from "react";
import ReactDOM from "react-dom/client";
import { routerPage } from "./App";
import { RouterProvider } from "react-router-dom";
import Provider from "./components/common/Provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <React.StrictMode>
      <RouterProvider router={routerPage} />
    </React.StrictMode>
  </Provider>
);
