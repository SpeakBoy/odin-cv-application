import { useState } from "react";
import GeneralInfo from "./GeneralInfo.jsx";
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";
import "../styles/App.css";

function App() {
    const [generalInfo, setGeneralInfo] = useState(null);
    const [generalInfoState, setGeneralInfoState] = useState("editing");

    const onGeneralInfoFormSubmit = (e) => {
        e.preventDefault();
        
        if (!e.target.checkValidity()) {
            e.target.reportValidity();
            return;
        }

        if (generalInfoState === "editing") {
            const firstName = e.target["first-name"].value;
            const lastName = e.target["last-name"].value;
            const email = e.target["email"].value;
            const phone = e.target["phone"].value;

            setGeneralInfo({ firstName, lastName, email, phone });
            setGeneralInfoState("submitted");

            e.target.reset();
        } else if (generalInfoState === "submitted") {
            e.target["first-name"].value = generalInfo.firstName;
            e.target["last-name"].value = generalInfo.lastName;
            e.target["email"].value = generalInfo.email;
            e.target["phone"].value = generalInfo.phone;

            setGeneralInfoState("editing");
        }
    };

    return (
        <>
            <h1>CV Generator</h1>
            <GeneralInfo state={generalInfoState} onFormSubmit={onGeneralInfoFormSubmit} />
            <Education />
            <Practical />
        </>
    );
}

export default App;
