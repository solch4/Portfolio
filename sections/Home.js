import React from "react";
import { Abril_Fatface } from "@next/font/google";
import { styles } from "@/styles";
import { useTranslation } from "next-i18next";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abrilFatface",
  weight: "400",
});

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div className={`${styles.container} ${styles.verticalFlow}`}>
      <h1 className={`${abrilFatface.variable} font-abrilFatface text-3xl`}>
        {t("homeSection.title", { returnObjects: true }).map((e) => e + " ")}
      </h1>
      <p>
        Amet eiusmod culpa velit labore laborum ullamco consectetur ut aliquip
        consectetur anim elit. Eu sit irure excepteur voluptate labore dolore.
        Aute commodo ullamco eiusmod minim consequat laborum eu velit minim
        voluptate enim elit aute. Aliquip consequat officia irure velit enim in
        sunt occaecat culpa in. Ut proident ea amet in labore ullamco excepteur
        labore esse proident aute ex. Laboris non aute tempor eiusmod
        consectetur. Incididunt tempor consequat id elit cillum enim voluptate
        ipsum nulla non. Consectetur irure non id culpa culpa nostrud occaecat
        eiusmod dolore. Ipsum eiusmod esse nostrud proident adipisicing irure
        ullamco commodo consectetur excepteur. Mollit eu consectetur minim
        aliqua commodo amet adipisicing. Consequat non eu ipsum ipsum et. Qui
        adipisicing id ut aliqua do consequat fugiat adipisicing nisi Lorem nisi
        in magna. In eu nulla consectetur occaecat labore mollit duis ut sint
        velit in cillum irure mollit. Occaecat cupidatat minim consequat
        voluptate cillum. Magna reprehenderit cillum nostrud proident non elit.
        Minim fugiat dolor duis laborum in cillum minim.
      </p>
    </div>
  );
}
