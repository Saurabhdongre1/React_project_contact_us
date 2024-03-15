import React, { useState } from "react";
import styles from "./Contact-form.module.css";
import Botton from "../Button/Botton";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      text: event.target[2].value
    };
    setSubmittedData(formData);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Botton
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Botton text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Botton
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              type="text"
              rows="8"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Botton type="submit" text="Submit" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Text: {submittedData.text}</p>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
