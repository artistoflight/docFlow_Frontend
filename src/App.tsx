import { Outlet, createBrowserRouter } from "react-router-dom";
import "./globals.css";
import AllDocs from "./components/alldocs/AllDocs";
import ErrorPage from "./components/common/ErrorPage";
import ProfileSetting from "./components/common/ProfileSetting";
import Editor from "./components/createdoc/Editor";

const App = () => {
  return (
    <main>
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
      {
        path: "/profile",
        element: <ProfileSetting />,
      },
      {
        path: "/edit",
        element: <Editor />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

export default App;
