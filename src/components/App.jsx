import { useState } from "react";
import GeneralInfo from "./GeneralInfo.jsx";
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";
import "../styles/App.css";

function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <GeneralInfo />
      <Education />
      <Practical />
    </>
  );
}

export default App;
