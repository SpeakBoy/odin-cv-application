function Practical({ state, onFormSubmit }) {
    return (
        <section id="practical-input">
            <h2>Practical Experience</h2>
            <form noValidate onSubmit={onFormSubmit}>
                <label>
                    Company Name:
                    <input type="text" name="company-name" />
                </label>
                <label>
                    Position Title:
                    <input type="text" name="position-title" />
                </label>
                <label>
                    Main Responsibilities:
                    <input type="text" name="responsibilities" />
                </label>
                <label>
                    Start Date:
                    <input type="date" name="work-from" />
                </label>
                <label>
                    End Date:
                    <input type="date" name="work-to" />
                </label>
                <button disabled={state === "editing"}>Edit</button>
                <button disabled={state === "submitted"}>Submit</button>
            </form>
        </section>
    );
}

export default Practical;
