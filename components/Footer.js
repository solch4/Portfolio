import Image from "next/image";
import { useTranslation } from "next-i18next";
import { styles } from "@/styles";
import logo from "../public/assets/logo.svg";

export default function Footer() {
  const { t } = useTranslation("common");
  const socials = t("footer.socials", { returnObjects: true });

  return (
    <div className={`${styles.innerWidth} flex flex-col md:flex-row gap-4 items-center justify-between py-8 md:py-6 mt-6`}>
      <Image src={logo} alt="Logo" className="w-auto h-8" />
      <small className="text-xs text-center">{t("footer.text")}</small>
      <div className="flex gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            aria-label={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            <img className="h-6" src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
    </div>
  );
}
