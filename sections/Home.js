import Image from "next/image";
import { Abril_Fatface } from "@next/font/google";
import { styles } from "@/styles";
import { useTranslation } from "next-i18next";
import illustration from "../public/assets/illustration.svg";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abrilFatface",
  weight: "400",
});

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <section id="home" className={`${styles.container} flex flex-col md:flex-row gap-8 md:justify-between items-center`}>
      <h1 className={`${abrilFatface.variable} text-center md:text-left whitespace-pre-line`}>
        {t("homeSection.title", { joinArrays: '\n' })}
      </h1>
      <Image
        className="w-full max-w-[464px] flex-1"
        src={illustration}
        alt="Illustration of a developer"
      />
    </section>
  );
}
