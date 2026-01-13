import HomeCard from "@comps/home/HomeCard/HomeCard";
import RightArrow from "@svgs/RightArrow";
import Link from "next/link";

const Education = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Education
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-primary to-transparent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <div className="flex items-center justify-center">
          <Link
            href="/education"
            className="group flex flex-col items-center gap-2 text-textSecondary hover:text-accent transition-colors"
          >
            <div className="p-4 rounded-full border border-white/10 bg-surface group-hover:border-accent/50 transition-all">
              <RightArrow className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="font-medium">View All Education</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
