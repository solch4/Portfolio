import { styles } from "@/styles";
import { Trans } from "next-i18next";

export default function Home({ t }) {
  return (
    <section id="home" className={`${styles.container} min-h-[85svh] grid place-content-center`}>
      <div className="mx-auto w-fit">
        <h1 className="text-wrap-balance text-left text-xl xs:text-[2rem] leading-none grid gap-2 xs:gap-4">
          <Trans i18nKey="homeSection.greeting">
            ¡Hola! Soy
            <span className="text-primary-200 text-[2.75rem] xs:text-7xl md:text-8xl block">
              Sol Maldonado
            </span>
          </Trans>
          {`<${t("homeSection.job")} />`}
        </h1>
      </div>
    </section>
  );
}
