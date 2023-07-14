import Image from "next/image";
import { styles } from "@/styles";
import ContactForm from "@/components/ContactForm";

export default function Contact({ t }) {
  const socials = t("contactSection.socials", { returnObjects: true });

  return (
    <section id="contact" className={`${styles.container} ${styles.verticalFlow}`}>
      <h2>{t("contactSection.title")}</h2>
      <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4 lg:space-y-6">
          <p>{t("contactSection.text")}</p>
          {socials.map((social) => (
            <a
              key={social.name}
              aria-label={social.username}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 truncate hover:underline"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={0}
                height={0}
                className="h-6 w-auto"
              />
              <span className="overflow-hidden text-ellipsis">
                {social.username}
              </span>
            </a>
          ))}
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm t={t} />
        </div>
      </div>
    </section>
  );
}
