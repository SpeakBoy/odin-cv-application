function Education({ state, onFormSubmit }) {
    return (
        <section id="education-input">
            <h2>Educational Experience</h2>
            <form noValidate onSubmit={onFormSubmit}>
                <label>
                    School Name:
                    <input type="text" name="school-name" />
                </label>
                <label>
                    Title of Study:
                    <input type="text" name="study-title" />
                </label>
                <label>
                    Start Date:
                    <input type="date" name="study-from" />
                </label>
                <label>
                    End Date:
                    <input type="date" name="study-to" />
                </label>
                <button disabled={state === "editing"}>Edit</button>
                <button disabled={state === "submitted"}>Submit</button>
            </form>
        </section>
    );
}

export default Education;
