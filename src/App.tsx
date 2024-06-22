import { Route, Routes } from "react-router-dom";
import "./globals.css";
import AllDocs from "./components/alldocs/AllDocs";
import ErrorPage from "./components/common/ErrorPage";
import ProfileSetting from "./components/common/ProfileSetting";
import Editor from "./components/createdoc/Editor";
import Home from "./components/main/Main";

const App = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/profile" element={<ProfileSetting />} />

        <Route path="/edit" element={<Editor />} />

        <Route path="/alldocs" element={<AllDocs />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default App;
