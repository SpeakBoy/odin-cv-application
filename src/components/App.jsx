import { useState } from "react";
import GeneralInfo from "./GeneralInfo.jsx";
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";
import "../styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);

  const onGeneralInfoSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target["first-name"].value;
    const lastName = e.target["last-name"].value;
    const email = e.target["email"].value;
    const phone = e.target["phone"].value;
    setGeneralInfo({firstName, lastName, email, phone});
    e.target.reset();
  };

  return (
    <>
      <h1>CV Generator</h1>
      <GeneralInfo onSubmit={onGeneralInfoSubmit} />
      <Education />
      <Practical />
    </>
  );
}

export default App;
