import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NavBar from "@/components/NavBar";
import Home from "@/sections/Home";
import AboutMe from "@/sections/AboutMe";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      <a
        className="-translate-y-full focus:translate-y-0 bg-primary-100 font-semibold fixed z-50 p-2 transition"
        href="#main"
      >
        {t("skipToMain")}
      </a>
      <NavBar t={t} />

      <main id="main">
        <Home t={t} />
        <AboutMe t={t} lang={i18n.language} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "es", ["common"])),
      // Will be passed to the page component as props
    },
  };
}
