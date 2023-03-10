import { Poppins } from "@next/font/google";
import Home from "@/sections/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavBar from "@/components/NavBar";
import AboutMe from "@/sections/AboutMe";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function Page() {
  return (
    <div className={`${poppins.variable} font-poppins gradient text-neutral-700`} >
      <NavBar />
      <Home />
      <AboutMe />
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
