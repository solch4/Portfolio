import { Poppins } from "@next/font/google";
import { styles } from "@/styles";
import Home from "@/sections/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavBar from "@/components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function Page() {
  return (
    <div className={`${styles.gradient} ${poppins.variable} font-poppins text-neutral-700`} >
      <NavBar />
      <Home />
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
