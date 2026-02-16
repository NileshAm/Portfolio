import ProjectCard from "@comps/ProjectCard/ProjectCard";
import { CDNFetch } from "@utils/imageFetch";
import { projects } from "@utils/data";

const page = () => {
  return (
    <main className="container mx-auto py-12 px-4 md:px-0">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-textSecondary to-transparent bg-clip-text text-transparent inline-block mb-4">
          Featured Projects
        </h1>
        <p className="text-textSecondary max-w-2xl mx-auto">
          A collection of my work in robotics, software development, and
          embedded systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            href={project.link}
            src={CDNFetch(project.image)}
            title={project.title}
            tags={project.tags}
          >
            {project.description}
          </ProjectCard>
        ))}
      </div>
    </main>
  );
};

export default page;
