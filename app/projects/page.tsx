import ProjectCard from "../components/ProjectCard/ProjectCard";
import { CDNFetch } from "../utils/imageFetch";

const page = () => {
  return (
    <main className="flex flex-wrap justify-evenly mt-6">
      <ProjectCard
        href="/projects/RoboGames-2025"
        src={CDNFetch("/images/f0c11ce6-d748-4db7-ba71-59ac5463216c.jpg")}
        title="RoboGames 2025"
      >
        RoboGames is a prestigious inter-university robotics competition that
        challenges participants to design, engineer, and battle autonomous or
        remotely controlled robots in a series of tactical combat rounds.
        Representing our university as Team LYNX, we participated with a
        custom-built battle robot engineered for durability, speed, and
        precision in a high-impact arena setting.
      </ProjectCard>
      <ProjectCard
        href="/projects/ThermoBand"
        src={CDNFetch("/images/c5fbbc8b-4c4d-4ec9-ab18-ef8c424c56e4.png")}
        title="ThermoBand EN1190"
      >
        ThermoBand EN1190 is a smart, wrist-worn wearable that continuously
        measures body temperature and updates readings to a remote server in
        real time. I led the full development of the device, covering
        mechanical, electrical, firmware, and cloud integration aspects.
      </ProjectCard>
      <ProjectCard
        href="/projects/DMobile-WebApp"
        src={CDNFetch("/images/a7adc748-48d8-43d4-872b-138398894027.jpg")}
        title="D-Mobile E-Commerce"
      >
        D-Mobile is a full-featured e-commerce web application built for an
        electronics store. It allows customers to browse products, manage carts,
        and make secure online purchases with integrated payment options. The
        platform also includes tools for inventory tracking, order management,
        and user authentication, making it a complete solution for both
        customers and store administrators.
      </ProjectCard>
    </main>
  );
};

export default page;
