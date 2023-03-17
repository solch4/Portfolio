import { useRef } from "react";
import emailjs from "@emailjs/browser";
import LargeButton from "./LargeButton";

export default function ContactForm({ t }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form className="grid gap-6 md:place-items-start" ref={form} onSubmit={sendEmail}>
      {/* name */}
      <div className="form-field">
        <label htmlFor="user_name">{t("contactSection.form.name")}</label>
        <input
          className="form-input"
          type="text"
          id="user_name"
          name="user_name"
          required
        />
      </div>
      {/* email */}
      <div className="form-field">
        <label htmlFor="user_email">{t("contactSection.form.email")}</label>
        <input
          className="form-input"
          type="email"
          id="user_email"
          name="user_email"
          required
        />
      </div>
      {/* message */}
      <div className="form-field">
        <label htmlFor="message">{t("contactSection.form.message")}</label>
        <textarea className="form-input" id="message" name="message" required />
      </div>
      {/* send btn */}
      <LargeButton>{t("contactSection.form.send")}</LargeButton>
    </form>
  );
}
