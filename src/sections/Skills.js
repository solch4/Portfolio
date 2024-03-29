import Image from "next/image";
import { styles } from "@/styles";

export default function Skills({ t }) {
  const skills = t("skillsSection.skills", { returnObjects: true });

  return (
    <section id="skills" className={`${styles.container} grid gap-6 md:gap-12`}>
      <h2>{t("skillsSection.title")}</h2>
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6 md:gap-10 lg:gap-16 place-items-center text-center">
        {skills.map((skill) => (
          <li key={skill.name}>
            <Image
              src={skill.image}
              alt=""
              aria-hidden="true"
              width={0}
              height={0}
              className="w-full h-10 sm:h-14 mb-4 md:mb-7"
            />
            <span className="truncate text-sm sm:text-base">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
