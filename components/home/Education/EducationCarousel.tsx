import Carousel from "@comps/ui/Carousel";
import { education } from "@utils/data";
import Img from "@comps/ui/Img";
import Button from "@comps/ui/Button";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

const EducationCarousel = () => {
  return (
    <section className="py-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"></div>
      </div>

      <Carousel className="w-full">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden group"
          >
            <Img
              src={edu.image}
              alt={edu.title}
              containerClassName="absolute inset-0 w-full h-full"
              className="group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-accent text-2xl" />
                <span className="text-accent font-semibold">{edu.period}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2 text-white">
                {edu.title}
              </h3>
              <p className="text-gray-200 line-clamp-3 md:line-clamp-2 max-w-2xl mb-6 text-sm md:text-base">
                {edu.description}
              </p>
              <div>
                <Button
                  href={edu.link}
                  variant="secondary"
                  size="md"
                  icon={<FaArrowRight />}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center mt-8">
        <Link
          href="/education"
          className="text-textSecondary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
        >
          View Education History <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default EducationCarousel;
