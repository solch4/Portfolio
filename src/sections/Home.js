import { styles } from "@/styles";
import { Trans } from "next-i18next";

export default function Home({ t }) {
  return (
    <section id="home" className={`${styles.container} min-h-[80vh] grid place-content-center`}>
      <div className="mx-auto w-fit">
        <h1 className="text-wrap-balance text-left text-3xl md:text-[2rem] leading-none grid gap-4">
          <Trans i18nKey="homeSection.greeting">
            ¡Hola! Soy
            <span className="text-primary-200 text-[2.75rem] md:text-7xl lg:text-8xl block">
              Sol Maldonado
            </span>
          </Trans>
          {`<${t("homeSection.job")} />`}
        </h1>
      </div>
    </section>
  );
}
