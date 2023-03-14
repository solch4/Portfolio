import { Abril_Fatface } from "@next/font/google";
import SmallButton from "./SmallButton";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abrilFatface",
  weight: "400",
});

function ProjectCard({ title, image, description, technologies, links }) {
  return (
    <article className="grid gap-4 lg:grid-cols-12 place-items-center" key={title}>
      <div className="lg:col-span-5 lg:col-start-8 lg:order-last">
        <img
          className="w-full max-w-[464px]"
          src={image}
          alt={title}
        />
      </div>
      <div className="lg:col-span-6 lg:order-first w-full grid gap-4">
        <h3 className={abrilFatface.variable}>{title}</h3>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li className="border px-4 rounded-lg" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {Object.keys(links).map((link) => (
            <SmallButton key={link} link={links[link]}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </SmallButton>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
