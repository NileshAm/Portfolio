import { CDNFetch } from "../utils/imageFetch";
import Sections from "./Sections/Sections";
import SectionTopic from "./SectionTopic/SectionTopic";
import Image from "next/image";
import TopicList from "./TopicList/TopicList";
import RightArrow from "@svgs/RightArrow";

const NIBM = () => {
  return (
    <Sections
      id="NIBM"
      heading="National Institute of Business Management"
      className="mt-10"
    >
      <SectionTopic id="NIBMinfo" heading="Info">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-4/5 w-full md:px-5">
            <p className="text-justify md:pe-5 md:px-0 px-2 leading-relaxed">
              The National Institute of Business Management (NIBM) was founded
              in 1968 under the Ministry of Industries and Scientific Affairs,
              in partnership with the UNDP and ILO, to spearhead business and
              technical training in Sri Lanka. It was later formalized by an Act
              of Parliament in 1976, becoming a statutory, self-sustaining
              entity under the Ministry of Education. NIBM is a UGC-recognized,
              degree-awarding institution offering globally relevant education
              in business, computing, engineering, design, and languages. NIBM
              operates eight campuses across Sri Lanka—including Colombo, Kandy,
              Galle, Kurunegala, Matara, Kirulapone (National Innovation
              Centre), and Kandy KIC—serving approximately 25,000 students
              through academic and professional programs. It also maintains 100+
              professional partnerships and 5 international affiliations,
              notably with Coventry University (UK), Limkokwing University
              (Malaysia), and UTM (Malaysia). Academically, NIBM consists of
              multiple schools: School of Business (5,000 students)—offering
              diverse management and consultancy programs. School of Computing &
              Engineering (6,000+ students)—pioneering programs in software
              engineering, networking, AI, IoT, and mechatronics; also a
              certified Cisco, Microsoft, and Red Hat training center . School
              of Design, Humanities, Language, and Productivity & Quality
              Center—located at the National Innovation Centre in Kirulapone,
              supporting creative, digital, and professional education. NIBM
              emphasizes outcome-based learning, industry-relevant research, and
              consultancy, supported by a dedicated Research Centre. It received
              ISO 9001 certification in 2009 and has won multiple National
              Quality Awards. Its mission is: “Creating a learning environment
              for fostering innovation through experiential learning to produce
              lifelong learners,” and its vision: “To become an organisation
              dedicated to producing thinkers capable of transforming their own
              lives and others”. NIBM&apos;s comprehensive
              facilities—air-conditioned labs, auditoriums, modern libraries,
              medical centres, cafeterias, and consulting units—serve students
              both academically and professionally. It also offers executive
              education, online learning via its Digital Campus, and a
              centralized job-portal service .
            </p>
            <div className="md:w-1/6 p-2 btn btn-hover md:my-2 my-5">
              <a
                href="https://www.nibm.lk"
                className="text-sm rounded-lg"
                target="_blank"
              >
                <div className="flex justify-center">
                  <span className=" ms-1 text-center">Visit Website</span>
                  <RightArrow className="ms-2 w-4" />
                </div>
              </a>
            </div>
          </div>
          <Image
            src={CDNFetch("/images/db163e20-0537-47a2-994b-b4ca675881e3.jpg")}
            alt="NIBM image"
            className="md:w-1/5 w-full rounded-lg h-fit"
            width={200}
            height={400}
          />
        </div>
      </SectionTopic>
      <SectionTopic id="NIBMacademic" heading="Academic">
        <p className="text-justify">
          Completed Diploma in Software Enginnering, with a
          <strong> Distiction pass</strong> of a credit score of{" "}
          <strong>3.911</strong>.
        </p>
      </SectionTopic>
      <SectionTopic id="NIBMprojects" heading="Projects">
        <ol className="list-decimal md:ms-10 ms-6">
          <TopicList
            id="NIBMDMobile"
            heading="D-Mobile Web Application"
            childrenClass="md:flex-row flex-col"
          >
            <div className="md:w-1/2">
              <p className="leading-relaxed md:pe-10 text-justify md:ms-0 -ms-6 md:px-0 px-2">
                Developed a full-stack E-commerce web application for D-Mobile,
                an electronics retailer, as part of the NIBM final project. The
                system supports product browsing, purchasing, inventory
                management, and online payments, with secure user authentication
                and data handling.
              </p>
              <div className="md:w-36 -ms-6 md:ms-0 p-2 btn btn-hover my-5">
                <a
                  href="/projects/DMobile-WebApp"
                  className="text-sm rounded-lg"
                >
                  <div className="flex justify-center">
                    <span className=" ms-1 text-center">Read more</span>
                    <RightArrow className="ms-2 w-4" />
                  </div>
                </a>
              </div>
            </div>
            <video
              controls
              className="rounded-lg md:w-1/2 -z-10 -ms-3 md:ms-0"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src={CDNFetch(
                  "/images/3ec5d47e-e935-4dd3-8acc-57327403c907.mp4"
                )}
              />
            </video>
          </TopicList>
        </ol>
      </SectionTopic>
    </Sections>
  );
};

export default NIBM;
