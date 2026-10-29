function GeneralInfo() {
    return (
        <section id="general">
            <h2>General Information</h2>
            <form>
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
            </form>
        </section>
    );
}

export default GeneralInfo;