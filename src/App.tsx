import { Outlet, createBrowserRouter } from "react-router-dom";
import "./globals.css";
import AllDocs from "./components/alldocs/AllDocs";
import ErrorPage from "./components/common/ErrorPage";

const App = () => {
  return (
    <main className="flex h-screen !overflow-y-scroll">
      <Outlet />
    </main>
  );
};

export const routerPage = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllDocs />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

export default App;
