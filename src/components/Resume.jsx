function Resume({ generalInfo, education, practical }) {
    if (!generalInfo && !education && !practical) {
        return null;
    }

    let generalInfoSection = null;
    if (generalInfo) {
        const fullName = generalInfo.firstName + " " + generalInfo.lastName;
        generalInfoSection = (
            <section id="general">
                <h1>{fullName}</h1>
                <h2>{generalInfo.phone}</h2>
                <h2>{generalInfo.email}</h2>
            </section>
        );
    }

    let educationSection = null;
    if (education) {
        educationSection = (
            <section id="education">
                <h2>Educational Experience</h2>
                <h3>{education.schoolName}</h3>
                <h4>{education.studyTitle}</h4>
                <h4>{education.studyFrom} - {education.studyTo}</h4>
            </section>
        );
    }

    let practicalSection = null;
    if (practical) {
        practicalSection = (
            <section id="practical">
                <h2>Practical Experience</h2>
                <h3>{practical.companyName}</h3>
                <h4>{practical.positionTitle}</h4>
                <h4>{practical.workFrom} - {practical.workTo}</h4>
                <p>{practical.responsibilities}</p>
            </section>
        )
    }


    return (
        <section id="resume">
            {generalInfoSection}
            {educationSection}
            {practicalSection}
        </section>
    );
}

export default Resume;