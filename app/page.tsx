import Image from "next/image";
import { CDNFetch } from "@utils/imageFetch";
import Education from "@comps/home/Education/Education";
import Projects from "@comps/home/Projects/Projects";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-0 pb-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-[80vh] gap-10">
        <div className="md:w-1/2 space-y-6 animate-slide-up text-center md:text-left flex flex-col justify-center md:ps-10">
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
            <a
              href="/projects"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-semibold transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Image
              src={CDNFetch("/images/profile-photo.jpg")}
              fill
              alt="Nilesh Amarathunge"
              className="object-cover rounded-full border-4 border-white/10 shadow-2xl relative z-10"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="space-y-32 pb-20">
        <Education />
        <Projects />
      </div>
    </main>
  );
}
