import { useRef } from "react";
import emailjs from "@emailjs/browser";
import LargeButton from "./LargeButton";
import { styles } from "@/styles";

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
    <form
      className="grid gap-6 md:place-items-start"
      ref={form}
      onSubmit={sendEmail}
    >
      {/* name */}
      <div className="relative w-full">
        <input
          className={styles.input}
          placeholder=" "
          type="text"
          id="user_name"
          name="user_name"
          required
        />
        <label className={styles.label} htmlFor="user_name">
          {t("contactSection.form.name")}
        </label>
      </div>
      {/* email */}
      <div className="relative w-full">
        <input
          className={styles.input}
          placeholder=" "
          type="email"
          id="user_email"
          name="user_email"
          required
        />
        <label className={styles.label} htmlFor="user_email">
          {t("contactSection.form.email")}
        </label>
      </div>
      {/* message */}
      <div className="relative w-full">
        <textarea
          className={styles.input}
          placeholder=" "
          id="message"
          name="message"
          rows="4"
          required
        />
        <label className={styles.label} htmlFor="message">
          {t("contactSection.form.message")}
        </label>
      </div>
      {/* send btn */}
      <LargeButton>{t("contactSection.form.send")}</LargeButton>
    </form>
  );
}
