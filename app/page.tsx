import Image from "next/image";
import { CDNFetch } from "@utils/imageFetch";
import Education from "@comps/home/Education/Education";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div>
          <div className="text-5xl p-6">
            Hi,
            <br /> I am{" "}
            <span className="text-highlight text-6xl font-bold font-mono shadow-lg">
              Nilesh Amarathunge
            </span>
          </div>
          <div className="w-50 p-2 px-6 text-lg text-justify leading-tight">
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
          src={CDNFetch("profile-photo.jpg")}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-50 m-2 mt-4 rounded-full shadow-2xl blur-mask -z-10"
        />
      </div>
      <Education />
    </main>
  );
}
