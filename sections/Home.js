import Image from "next/image";
import { styles } from "@/styles";
import { Trans } from "next-i18next";
import illustration from "../public/assets/illustration.svg";

export default function Home() {
  return (
    <section id="home" className={`${styles.container} grid md:grid-cols-12 gap-y-6 gap-x-4 items-center justify-center`}>
      <div className="md:col-span-6">
        <h1 className="text-center md:text-left whitespace-pre-line">
          <Trans i18nKey="homeSection.title">
            Hi! I'm <span className="text-primary-200">Sol Maldonado</span>,
            Front-End Developer
          </Trans>
        </h1>
      </div>
      <div className="md:col-span-5 md:col-start-8">
        <Image
          className="w-full max-w-[464px]"
          src={illustration}
          alt="Illustration of a developer"
        />
      </div>
    </section>
  );
}
