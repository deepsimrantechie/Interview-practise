import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Upload from "./Components/Upload";

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <h1 className="flex flex-col items-center text-center text-3xl">
        Upload here images and comments
      </h1>
      <Upload />
    </div>
  );
};

export default App;
