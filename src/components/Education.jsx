function Education() {
    return (
        <section id="education">
            <h2>Educational Experience</h2>
            <label>
                School Name:
                <input type="text" name="school-name" />
            </label>
            <label>
                Title of Study:
                <input type="text" name="study-title" />
            </label>
            <label>
                Date of Study (From):
                <input type="date" name="date-from" />
            </label>
            <label>
                Date of Study (To):
                <input type="date" name="date-to" />
            </label>
        </section>
    );
}

export default Education;