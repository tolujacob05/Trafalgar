import React from "react";
import "./App.css"
import FrontPage from "./Components/Frontpage/FrontPage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <FrontPage />
      </div>
    </>
  )
};

export default App;