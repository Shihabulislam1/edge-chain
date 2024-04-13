import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./routes/HomePage/HomePage";
import Blocks from "./routes/Blocks/Blocks";
import Dashboard from "./routes/Dashboard/Dashboard";
import Docs from "./routes/Docs/Docs";
import Edges from "./routes/Edges/Edges";
import BlockDetails from "./routes/BlockDetails/BlockDetails";
import SideBar from "./components/SideBar/SideBar";
import DashboardDetails from "./components/DashboardDetails/DashboardDetails";
import Cloud from "./routes/Cloud/Cloud";
import Landing from "./routes/Landing/Landing";

const api = "https://iot-server-file.onrender.com";

function App() {
  const [currentHash, setCurrentHash] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
          </Route>
          <Route path="cloud" element={<Cloud />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route
              path="dashboard-details"
              element={
                <DashboardDetails setCurrentHash={setCurrentHash} api={api} />
              }
            />
            <Route path="docs" element={<Docs />} />
            <Route path="edges" element={<Edges api={api} />} />
            <Route
              path="blocks"
              element={<Blocks setCurrentHash={setCurrentHash} api={api} />}
            />
            {/* Nested route within "blocks"
            <Route index element={<Blocks />} />*/}
            <Route
              path="blockdetails"
              element={<BlockDetails currentHash={currentHash} api={api} />}
            />
          </Route>

          <Route path="sidebar" element={<SideBar />} />
          {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
