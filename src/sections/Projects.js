import { useState } from "react";
import { styles } from "@/styles";
import ProjectCard from "@/components/ProjectCard";
import LargeButton from "@/components/LargeButton";

export default function Projects({ t }) {
  const projects = t("projectsSection.projects", { returnObjects: true });
  const displayedProjects = 3;
  const [limitProjects, setLimitProjects] = useState(displayedProjects);
  const [isLimitBtnVisible, setLimitBtnVisibility] = useState(true);

  const loadMoreProjects = () => {
    if (limitProjects + displayedProjects >= projects.length) {
      setLimitBtnVisibility(false);
      setLimitProjects(projects.length);
    } else {
      setLimitProjects((prevAmount) => prevAmount + displayedProjects);
    }
  };

  return (
    <section id="projects" className={`${styles.container} ${styles.verticalFlow}`}>
      <h2>{t("projectsSection.title")}</h2>
      {/* cards */}
      <div className="grid gap-8 md:gap-12">
        {projects.slice(0, limitProjects).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {/* load more button */}
      {isLimitBtnVisible && (
        <div className="grid md:place-content-center">
          <LargeButton handleClick={loadMoreProjects}>
            {t("projectsSection.loadMoreProjectsBtn")}
          </LargeButton>
        </div>
      )}
    </section>
  );
}
