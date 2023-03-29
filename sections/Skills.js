import { useTranslation } from "next-i18next";
import { styles } from "@/styles";

export default function Skills() {
  const { t } = useTranslation("common");

  const skills = t("skillsSection.skills", { returnObjects: true });

  return (
    <section id="skills" className={`${styles.container} grid gap-6 md:gap-12`}>
      <h2>{t("skillsSection.title")}</h2>
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-10 lg:gap-16 place-items-center">
        {skills.map((skill) => (
          <li
            className="grid gap-4 md:gap-7 place-items-center"
            key={skill.name}
          >
            <img
              className="w-full h-[3.5rem] lg:h-[5.5rem]"
              src={skill.image}
              alt=""
              aria-hidden="true"
            />
            <span className="truncate">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
