import { Poppins } from "@next/font/google";
import { styles } from "@/styles";
import Home from "@/sections/Home";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function Page() {
  return (
    <div className={`${styles.gradient} ${poppins.variable} font-poppins`}>
      <Home />
    </div>
  );
}
