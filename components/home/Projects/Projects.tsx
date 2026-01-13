import HomeCard from "@comps/home/HomeCard/HomeCard";
import RightArrow from "@svgs/RightArrow";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Projects
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <HomeCard
          image="/images/f0c11ce6-d748-4db7-ba71-59ac5463216c.jpg"
          href="/projects/RoboGames-2025"
          className="leading-tight"
        >
          RoboGames is an inter-university robotics competition where student
          teams design, build, and battle custom-built robots in head-to-head
          matches.
        </HomeCard>
        <HomeCard
          image="/images/a7adc748-48d8-43d4-872b-138398894027.jpg"
          href="/projects/DMobile-WebApp"
        >
          D-Mobile is an e-commerce website developed for a local electronics
          store, providing a complete online platform for browsing and
          purchasing products.
        </HomeCard>
        
        <div className="flex items-center justify-center">
          <Link
            href="/projects"
            className="group flex flex-col items-center gap-2 text-textSecondary hover:text-accent transition-colors"
          >
            <div className="p-4 rounded-full border border-white/10 bg-surface group-hover:border-accent/50 transition-all">
              <RightArrow className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="font-medium">View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
