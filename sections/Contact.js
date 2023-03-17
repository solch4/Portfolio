import { useTranslation } from "next-i18next";
import { styles } from "@/styles";
import { Abril_Fatface } from "@next/font/google";
import ContactForm from "@/components/ContactForm";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abrilFatface",
  weight: "400",
});

export default function Contact() {
  const { t } = useTranslation("common");
  const socials = t("contactSection.socials", { returnObjects: true });

  return (
    <section id="contact" className={`${styles.container} ${styles.verticalFlow}`}>
      <h2 className={abrilFatface.variable}>{t("contactSection.title")}</h2>
      <div className="grid gap-y-8 gap-x-4 lg:grid-cols-12">
        <div className="lg:col-span-5 grid gap-4 lg:gap-6 place-content-start">
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
              <img className="h-6" src={social.icon} alt={social.name} />
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
