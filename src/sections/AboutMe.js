import { styles } from "@/styles";
import photo from "../../public/assets/photo.png";
import LargeButton from "@/components/LargeButton";
import Image from "next/image";

export default function AboutMe({ t, lang }) {
  const openResume = () =>
    window.open(
      `/assets/resumes/CV Sol Maldonado - Fullstack developer (${lang}).pdf`
    );

  return (
    <section id="about" className={`${styles.container} grid gap-6 md:gap-12`}>
      <h2>{t("aboutSection.title")}</h2>
      <div className="grid md:grid-cols-12 gap-y-6 gap-x-4 md:gap-x-6 place-items-center">
        <div className="md:col-span-5">
          <Image
            className="w-full sm:max-lg:max-w-[464px] rounded-2xl"
            src={photo}
            alt="Photograph of Sol Maldonado"
          />
        </div>
        <div className="md:col-span-7 grid gap-6 md:place-items-start">
          <p>{t("aboutSection.text")}</p>
          <LargeButton handleClick={openResume}>
            {t("aboutSection.button")}
          </LargeButton>
        </div>
      </div>
    </section>
  );
}
