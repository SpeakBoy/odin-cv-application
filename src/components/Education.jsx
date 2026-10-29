function Education() {
    return (
        <section id="education">
            <h2>Educational Experience</h2>
            <form>
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
                <button>Edit</button>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default Education;
