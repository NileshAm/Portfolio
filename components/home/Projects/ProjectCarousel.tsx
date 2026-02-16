import Carousel from "@comps/ui/Carousel";
import { projects } from "@utils/data";
import Img from "@comps/ui/Img";
import Button from "@comps/ui/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ProjectCarousel = () => {
  return (
    <section className="py-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-secondary to-transparent rounded-full opacity-50"></div>
      </div>

      <Carousel className="w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden group"
          >
            <Img
              src={project.image}
              alt={project.title}
              containerClassName="absolute inset-0 w-full h-full"
              className="group-hover:scale-105 transition-transform duration-700"
              aspectRatio={16/9}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-200 line-clamp-3 md:line-clamp-2 max-w-2xl mb-6 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <Button
                  href={project.link}
                  variant="primary"
                  size="md"
                  icon={<FaArrowRight />}
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center mt-8">
        <Link
          href="/projects"
          className="text-textSecondary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
        >
          View All Projects <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default ProjectCarousel;
