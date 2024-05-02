import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  // logic for when the user submits the contact form
  // if the email is invalid, they will be given an error message below the submit button
  // if the email is valid, the form will be "submitted" and an alert will thank them for their message
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    alert("Thank you for your message, I will respond as soon as possible");
  };

  // logic for if the user leaves a field blank
  // depending on which field is left blank when they click out of the input, the error message
  // will tell the user to enter text into that field
  const handleNoInput = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value === "") {
      setErrorMessage(`Please enter your ${name}`);
    } else if (name === "email" && value === "") {
      setErrorMessage(`Please enter your ${name}`);
    } else if (name === "message" && value === "") {
      setErrorMessage(`Please enter your ${name}`);
    }
  };

//   handles the state change of typing into the inputs
  const handleInputChange = (e) => {
    const { name, value } =  e.target;
    if (name === 'name')  {
        setUserName(value);
    } else if  (name === 'email') {
        setEmail(value);
    }  else if (name === 'message') {
        setMessage(value);
    }
  };

  return (
    <div>
      <form className="form text-center" onSubmit={handleFormSubmit}>
        <div className="input-group my-3">
          <span className="input-group-text">Name</span>
          <input
            value={userName}
            name="name"
            type="text"
            className="form-control"
            placeholder="Your name"
            onBlur={handleNoInput}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group my-3">
          <span className="input-group-text">Email</span>
          <input
            value={email}
            name="email"
            type="text"
            className="form-control"
            placeholder="Your email"
            onBlur={handleNoInput}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group my-3">
          <span className="input-group-text">Message</span>
          <textarea
            value={message}
            name="message"
            type="text"
            className="form-control"
            placeholder="Your message"
            onBlur={handleNoInput}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary my-3">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div className="text-center">
          <p className="error-text  text-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
