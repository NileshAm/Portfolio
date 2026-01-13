import Image from "next/image";
import Sections from "./Sections/Sections";
import SectionTopic from "./SectionTopic/SectionTopic";
import TopicList from "./TopicList/TopicList";
import RightArrow from "@svgs/RightArrow";
import { CDNFetch } from "@utils/imageFetch";

const UOM = () => {
  return (
    <Sections id="UOM" heading="University of Moratuwa">
      <SectionTopic id="UOMinfo" heading="Info" className="">
        <div className="md:w-4/5 w-full md:px-5 px-2">
          <p className="text-justify leading-relaxed md:pe-5">
            The University of Moratuwa—familiarly known as Mora—is Sri
            Lanka&apos;s leading public technological university, situated in
            Katubedda, Moratuwa, overlooking Bolgoda Lake . With roots dating
            back to the Government Technical College (established in 1893), it
            later became the Ceylon Technical College and Katubedda Campus of
            the University of Ceylon in 1972, before gaining full university
            status in 1978.Today, the university serves more than 11,000
            students (approximately 9,000 undergraduates and 2,500
            postgraduates), supported by 500 academic staff across multiple
            faculties including Architecture, Engineering, Information
            Technology, Graduate Studies, Business, and Medicine. It is
            internationally recognized, accredited by the University Grants
            Commission and affiliated with bodies such as the Association of
            Commonwealth Universities, RIBA, and IET.The university offers
            extensive academic, cultural, and recreational opportunities through
            over 25 student clubs, organized sports (from cricket to badminton
            and rowing), and facilities like gymnasiums and swimming pools .
            Students have also earned global recognition, having excelled in
            competitions like Google Summer of Code and Imagine Cup Sri
            Lanka.Committed to pioneering education and research, the University
            of Moratuwa continues to shape Sri Lanka&apos;s future leaders in
            technology and innovation, guided by its enduring motto “Vidyayeva
            Sarvadhanam” (Wisdom is all Wealth).
          </p>
          <div className="md:w-1/6 w-1/2 p-2 btn btn-hover my-2">
            <a
              href="https://www.uom.lk"
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
      </SectionTopic>
      <SectionTopic id="UOMacademic" heading="Acadamic">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-5/6">
            <table className="md:w-2/3 w-full">
              <thead>
                <tr>
                  <th className="w-1/6">Year</th>
                  <th className="w-1/3">Semester</th>
                  <th className="w-1/6">GPA</th>
                  <th className="w-1/3">Spetial Notes</th>
                </tr>
              </thead>
              <tbody className="text-center ">
                <tr>
                  <td>2024</td>
                  <td>Semester 1</td>
                  <td>4.0</td>
                  <td>Dean&apos;s List</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>Semester 2</td>
                  <td>4.0</td>
                  <td>Dean&apos;s List</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>Semester 3</td>
                  <td>3.6913</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Semester 4</td>
                  <td>*</td>
                  <td>*</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Semester 5</td>
                  <td>*</td>
                  <td>*</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Semester 6</td>
                  <td>*</td>
                  <td>*</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Semester 7</td>
                  <td>*</td>
                  <td>*</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Semester 8</td>
                  <td>*</td>
                  <td>*</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-textSecondary mt-3 text-textPrimary-dark">
              Note : &apos;*&apos; marks datails to be updated
            </p>
          </div>
          <Image
            src={CDNFetch("/images/be0393d2-2e99-4a22-82ee-4dacbfdc5bdd.jpg")}
            alt="University of Moratuwa"
            width={600}
            height={(600 / 4) * 3}
            className="rounded-lg mt-3 w-auto"
          />
        </div>
      </SectionTopic>
      <SectionTopic id="UOMprojects" heading="Extra Curricular">
        <ol className="list-decimal md:ms-10 ms-6">
          <TopicList
            id="UOMRobogames"
            heading="IESL Robogames"
            childrenClass="flex flex-col md:flex-row md:ms-0 -ms-6"
          >
            <div className="md:w-5/6">
              <div className=" text-justify leading-relaxed md:pe-5 md:px-0 px-2 ">
                RoboGames is an inter-university robotics competition where
                student teams design, build, and battle custom-built robots in
                head-to-head matches. As a proud member of Team LYNX, I played a
                leading role in bringing our battle bot to life.
              </div>
              <div className="flex justify-evenly flex-wrap mt-2 pe-5 md:pe-0">
                <Image
                  src={CDNFetch(
                    "/images/9f540a0e-9302-4341-aeda-7d520acef92c.jpg"
                  )}
                  alt="Robogames Image"
                  width={350}
                  height={(350 / 9) * 16}
                  className="rounded-lg mt-3 md:w-auto w-full ms-3 md:me-0 me-10"
                />
                <Image
                  src={CDNFetch(
                    "/images/e1a06a91-7854-4188-a68a-3fb596bc37df.jpg"
                  )}
                  alt="Robogames Image"
                  width={500}
                  height={350}
                  className="rounded-lg mt-3 md:w-auto w-full ms-3 md:me-0 me-10"
                />
              </div>
              <div className="md:w-36 w-full p-2 btn btn-hover my-5">
                <a
                  href="/projects/RoboGames-2025"
                  className="text-sm rounded-lg"
                >
                  <div className="flex justify-center">
                    <span className=" ms-1 text-center">Read more</span>
                    <RightArrow className="ms-2 w-4" />
                  </div>
                </a>
              </div>
            </div>
            <Image
              src={CDNFetch("/images/2784a8a5-d139-4956-869e-abfd2278b6d2.jpg")}
              alt="Robogames Image"
              width={350}
              height={(350 / 9) * 16}
              className="rounded-lg mt-3 w-auto ms-3 pe-2 md:pe-0 h-fit"
            />
          </TopicList>
          <TopicList
            heading="ThermoBand Product Design"
            id="UOMThermoBand"
            className="mt-2 leading-relaxed text-justify"
          >
            <p className="md:ms-0 -ms-6 md:px-0 px-2">
              ThermoBand is a wearable real time temperature monitoring device
              developed as part of a team project. I led the project, designing
              the 3D-printed enclosure, selecting all necessary components, and
              writing the complete microcontroller code. The ThermoBand captures
              temperature data and presents it in real time, highlighting both
              engineering integration and embedded system development.
            </p>
          </TopicList>
          <div className="w-36 p-2 btn btn-hover my-5">
            <a href="/projects/ThermoBand" className="text-sm rounded-lg">
              <div className="flex justify-center">
                <span className=" ms-1 text-center">Read more</span>
                <RightArrow className="ms-2 w-4" />
              </div>
            </a>
          </div>
        </ol>
      </SectionTopic>
    </Sections>
  );
};

export default UOM;
