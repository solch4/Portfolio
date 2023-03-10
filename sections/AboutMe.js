import { Abril_Fatface } from "@next/font/google";
import { styles } from "@/styles";
import { useTranslation } from "next-i18next";
import photo from "../public/assets/photo.png";
import LargeButton from "@/components/LargeButton";
import Image from "next/image";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abrilFatface",
  weight: "400",
});

export default function AboutMe() {
  const { t } = useTranslation("common");

  return (
    <section id="about" className={`${styles.container} grid gap-6 md:gap-12`}>
      <h2 className={abrilFatface.variable}>{t("aboutSection.title")}</h2>
      <div className="grid md:grid-cols-12 gap-y-6 gap-x-4 place-items-center">
        <Image
          className="md:col-span-5 w-full max-w-[464px] rounded-full"
          src={photo}
          alt="Photograph of Sol Maldonado"
        />
        <div className="md:col-span-6 md:col-start-7 grid gap-6 place-items-start">
          <p>{t("aboutSection.text")}</p>
          <LargeButton handleClick={() => window.open("/assets/resume.pdf")}>
            {t("aboutSection.button")}
          </LargeButton>
        </div>
      </div>
    </section>
  );
}
