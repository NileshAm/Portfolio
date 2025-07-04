import HomeCard from "@comps/home/HomeCard/HomeCard";
import RightArrow from "@svgs/RightArrow";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <hr className="m-5 border-highlight" />
      <div className="justify-center flex">
        <h1 className="text-4xl ms-5 font-bold">Projects</h1>
      </div>
      <div className="flex">
        <HomeCard
          image="/images/f0c11ce6-d748-4db7-ba71-59ac5463216c.jpg"
          href="/projects/RoboGames-2025"
          imgClassName="w-64 object-contain"
          className="leading-tight"
        >
          RoboGames is an inter-university robotics competition where student
          teams design, build, and battle custom-built robots in head-to-head
          matches. As a proud member of Team LYNX, I played a leading role in
          bringing our battle bot to life.
        </HomeCard>
        <HomeCard
          image="/images/a7adc748-48d8-43d4-872b-138398894027.jpg"
          href="/projects/DMobile-WebApp"
        >
          D-Mobile is an e-commerce website developed for a local electronics
          store, providing a complete online platform for browsing and
          purchasing products.
        </HomeCard>
        <div className="self-center ms-4 ">
          <Link
            href={"/projects"}
            className="flex w-1/3 border-4 rounded-full border-secondary p-2 hover:bg-secondary hover:text-textPrimary transition-all"
          >
            <RightArrow className="w-inherit" />
            <p className="text-center leading-tight">See More</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
