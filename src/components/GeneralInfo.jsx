function GeneralInfo({ state, onFormSubmit }) {
    return (
        <section id="general-input">
            <h2>General Information</h2>
            <form noValidate onSubmit={onFormSubmit}>
                <label>
                    First Name:
                    <input type="text" name="first-name" />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last-name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phone" />
                </label>
                <button disabled={state === "editing"}>Edit</button>
                <button disabled={state === "submitted"}>Submit</button>
            </form>
        </section>
    );
}

export default GeneralInfo;
