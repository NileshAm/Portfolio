import Img from "@comps/ui/Img";
import { CDNFetch } from "@utils/imageFetch";
import EducationCarousel from "@comps/home/Education/EducationCarousel";
import ProjectCarousel from "@comps/home/Projects/ProjectCarousel";
import Button from "@comps/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center gap-20 md:gap-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-[80vh] gap-10 pt-10 md:pt-0">
        <div className="md:w-1/2 space-y-6 animate-slide-up text-center md:text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <br />
            <span className="text-gradient">Nilesh Amarathunge</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary leading-relaxed max-w-lg mx-auto md:mx-0">
            A passionate engineering undergraduate at the{" "}
            <span className="text-accent">University of Moratuwa</span>. I
            specialize in software development, embedded systems, and robotics,
            building innovative solutions for the future.
          </p>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <Button
              href="/projects"
              variant="primary"
              className="hover:scale-105"
            >
              View Work
            </Button>
            <Button
              href="#contact"
              variant="outline"
              className="hover:bg-white/10"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Img
              src={CDNFetch("/images/profile-photo.jpg")}
              alt="Nilesh Amarathunge"
              containerClassName="w-full h-full relative z-10"
              className="rounded-full  border-4 border-white/10 shadow-2xl "
              loading="eager"
              aspectRatio={1}
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="space-y-20 container mx-auto">
        <EducationCarousel />
        <ProjectCarousel />
      </div>
    </main>
  );
}
