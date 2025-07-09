import HomeCard from "@comps/home/HomeCard/HomeCard";
import RightArrow from "@svgs/RightArrow";
import Link from "next/link";

const Education = () => {
  return (
    <>
      <hr className="m-5 border-highlight" />
      <div className="justify-center flex">
        <h1 className="text-4xl ms-5 font-bold">Education</h1>
      </div>
      <div className="flex justify-evenly flex-col md:flex-row">
        <HomeCard
          image="/images/56b8ffc1-e90d-4f18-822d-3ca6f2a376cc.jpg"
          href="/education#Maliyadeva"
        >
          Maliyadeva College, located in Kurunegala, Sri Lanka, is among the
          country&apos;s oldest national schools. Established in 1888 by the
          Buddhist Theosophical Society under Colonel Henry Steel Olcott, it
          serves over 4,000 students.
        </HomeCard>
        <HomeCard
          image="/images/be0393d2-2e99-4a22-82ee-4dacbfdc5bdd.jpg"
          href="/education#UOM"
        >
          University of Moratuwa, located in Moratuwa, is Sri Lanka’s premier
          engineering and technology university. Established in 1972, its motto
          “Wisdom is all Wealth” reflects its focus on academic and technical
          excellence.
        </HomeCard>
        <div className="self-center mx-4 md:w-1/12 w-1/2">
          <Link
            href={"/education"}
            className="flex justify-evenly items-center border-4 rounded-full border-secondary p-2 hover:bg-secondary hover:text-textPrimary transition-all"
          >
            <RightArrow className="w-10" />
            <p className="text-center leading-tight">See More</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Education;
