import { useState } from "react";

export default function Contact() {
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleBlank(e) {
        if (e.target.name === "name" || e.target.name === "message") {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form className="contact-form">

                <label className="label" for="name">Full Name
                    <input defaultValue={name} onBlur={handleBlank} id="name" name="name" type="text" required></input>
                </label>


                <label className="label" for="email">Email Address
                    <input defaultValue={email} onBlur={handleChange} type='email' id="email" name="email" required></input>
                </label>


                <label className="label" for="message"> Message
                    <textarea type="text" defaultValue={message} onBlur={handleBlank} id="message" name="message" required rows="10"></textarea>
                </label>

                <div><p>{errorMessage}</p></div>

                <div>
                    <button type="submit"> Submit</button>
                </div>
            </form>
        </div>
    )
}