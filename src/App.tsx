import { Route, Routes } from "react-router-dom";
import "./globals.css";
import AllDocs from "./components/alldocs/AllDocs";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/" element={<AllDocs />} />
      </Routes>
    </main>
  );
};

export default App;
