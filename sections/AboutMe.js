import { styles } from "@/styles";
import { useTranslation } from "next-i18next";
import photo from "../public/assets/photo.png";
import LargeButton from "@/components/LargeButton";
import Image from "next/image";

export default function AboutMe() {
  const { t } = useTranslation("common");

  return (
    <section id="about" className={`${styles.container} grid gap-6 md:gap-12`}>
      <h2>{t("aboutSection.title")}</h2>
      <div className="grid md:grid-cols-12 gap-y-6 gap-x-4 place-items-center">
        <div className="md:col-span-5">
          <Image
            className="w-full max-w-[464px] rounded-full"
            src={photo}
            alt="Photograph of Sol Maldonado"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7 grid gap-6 md:place-items-start">
          <p>{t("aboutSection.text")}</p>
          <LargeButton handleClick={() => window.open("/assets/resume.pdf")}>
            {t("aboutSection.button")}
          </LargeButton>
        </div>
      </div>
    </section>
  );
}
