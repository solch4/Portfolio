import { useTranslation } from "next-i18next";
import { Abril_Fatface } from "@next/font/google";
import { styles } from "@/styles";
import ProjectCard from "@/components/ProjectCard";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abrilFatface",
  weight: "400",
});

export default function Projects() {
  const { t } = useTranslation("common");
  const projects = t("projectsSection.projects", { returnObjects: true });

  return (
    <section id="projects" className={`${styles.container} ${styles.verticalFlow}`}>
      <h2 className={`${abrilFatface.variable}`}>{t("projectsSection.title")}</h2>
      <div className="grid gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
