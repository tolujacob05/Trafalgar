import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import FrontPage from "./Components/Frontpage/FrontPage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <FrontPage />
        <Footer />
      </div>
    </>
  )
};

export default App;