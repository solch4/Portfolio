import { Abril_Fatface, Poppins } from "@next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavBar from "@/components/NavBar";
import Home from "@/sections/Home";
import AboutMe from "@/sections/AboutMe";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abrilFatface",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function Page() {
  return (
    <div className={`${abrilFatface.variable} ${poppins.variable} font-poppins gradient text-neutral-700`} >
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
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
