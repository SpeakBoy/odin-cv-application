function Practical() {
    return (
        <section id="practical">
            <h2>Practical Experience</h2>
            <form>
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
                    <input type="text" name="respnsibilities"/>
                </label>
                <label>
                    Start Date:
                    <input type="date" name="work-from" />
                </label>
                <label>
                    End Date:
                    <input type="date" name="work-to" />
                </label>
                <button>Edit</button>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default Practical;