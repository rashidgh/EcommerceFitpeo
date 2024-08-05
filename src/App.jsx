import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <div id="main"  className="flex ">
        <Sidebar />
        <Navbar />
      </div>
      
    </div>
  );
};

export default App;
