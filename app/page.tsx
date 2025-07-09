import Image from "next/image";
import { CDNFetch } from "@utils/imageFetch";
import Education from "@comps/home/Education/Education";
import Projects from "@comps/home/Projects/Projects";

export default function Home() {
  return (
    <main className="px-2">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-2/3 w-full">
          <div className="sm:text-5xl text-3xl sm:px-10 px-3 w-1/2 sm:m-0 mt-7 leading-relaxed sm sm:leading-snug">
            Hi,
            <br className="" /> I am{" "}
            <span className="text-highlight sm:text-6xl text-4xl font-bold font-mono shadow-lg">
              Nilesh Amarathunge
            </span>
          </div>
          <div className="p-2 sm:px-10 px-3 text-lg text-justify sm:leading-normal leading-tight ">
            Hi! I&apos;m Nilesh Amarathunge, a passionate engineering
            undergraduate currently studing in{" "}
            <strong className="text-highlight">
              University of Moratuwa, Sri Lanka
            </strong>
            . I specialize in software development, embedded systems, and
            robotics, and I&apos;m deeply committed to building innovative and
            meaningful tech solutions.
            <br />
            <br />
            My current focus is on developing full-stack web applications,
            experimenting with Internet of Things (IoT) systems, and
            continuously refining my skills{" "}
            <strong className="text-highlight">electronics</strong>
            <br />
            <br />
            Looking ahead, I aspire to become a highly skilled engineer and
            researcher in the fields of AI and autonomous systems. I&apos;m
            driven by curiosity, powered by learning, and ready to take on
            opportunities that challenge and grow me — whether that&apos;s
            collaborating on impactful projects or exploring new technological
            frontiers.
          </div>
        </div>
        <Image
          src={CDNFetch("/images/profile-photo.jpg")}
          width={500}
          height={500}
          alt="Picture of the author"
          className="sm:w-1/3 w-1/2 sm:m-2 h-fit mt-4 sm:me-10 rounded-full shadow-2xl blur-mask -z-10 absolute sm:static top-10 right-0 sm:top-0"
        />
      </div>
      <Education />
      <Projects />
    </main>
  );
}
