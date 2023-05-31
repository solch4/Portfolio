import Image from "next/image";
import SmallButton from "./SmallButton";

function ProjectCard({ title, image, description, technologies, links }) {
  return (
    <article className="grid gap-4 lg:grid-cols-12 place-items-center">
      <div className="lg:col-span-5 lg:col-start-8 lg:order-last">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto max-w-[464px]"
        />
      </div>
      <div className="lg:col-span-6 lg:order-first w-full space-y-4">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <li className="border px-2 rounded-full" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
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
