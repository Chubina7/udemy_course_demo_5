import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const sendMessageHandler = (e) => {
    e.preventDefault();

    // Should add Client Side validation
    // ***
    // Make object to send data
    const newMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    // Sending HTPP request
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={styles.contact}>
      <h1>How Can I Help You?</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button onClick={sendMessageHandler}>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
