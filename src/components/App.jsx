import { useState } from "react";
import GeneralInfo from "./GeneralInfo.jsx";
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";
import "../styles/App.css";

function App() {
    const [generalInfo, setGeneralInfo] = useState(null);
    const [generalInfoState, setGeneralInfoState] = useState("editing");
    const [education, setEducation] = useState(null);
    const [educationState, setEducationState] = useState("editing");

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

    const onEducationFormSubmit = (e) => {
        e.preventDefault();

        if (!e.target.checkValidity()) {
            e.target.reportValidity();
            return;
        }

        if (educationState === "editing") {
            const schoolName = e.target["school-name"].value;
            const studyTitle = e.target["study-title"].value;
            const studyFrom = e.target["study-from"].value;
            const studyTo = e.target["study-to"].value;

            setEducation({ schoolName, studyTitle, studyFrom, studyTo });
            setEducationState("submitted");

            e.target.reset();
        } else if (educationState === "submitted") {
            e.target["school-name"].value = education.schoolName;
            e.target["study-title"].value = education.studyTitle;
            e.target["study-from"].value = education.studyFrom;
            e.target["study-to"].value = education.studyTo;

            setEducationState("editing");
        }
    }

    return (
        <>
            <h1>CV Generator</h1>
            <GeneralInfo state={generalInfoState} onFormSubmit={onGeneralInfoFormSubmit} />
            <Education state={educationState} onFormSubmit={onEducationFormSubmit} />
            <Practical />
        </>
    );
}

export default App;
