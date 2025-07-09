import Image from "next/image";
import { CDNFetch } from "@utils/imageFetch";
const page = () => {
  return (
    <main className="m-4 mx-5">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-5/6">
          <h1 className="text-4xl text-highlight">About Me</h1>
          <p className="text-lg mt-2 text-justify md:px-5 px-2 leading-relaxed">
            Hello! I&apos;m{" "}
            <span className="text-highlight">A.M. Nilesh Amarathunge</span>, a
            tech enthusiast and engineering undergraduate with a strong passion
            for robotics, machine learning, and software development. My journey
            in technology began long before university, driven by curiosity,
            hands-on projects, and a desire to build meaningful solutions.
          </p>
          <hr className="my-6 " />
          <h2 className="text-3xl text-highlight ">My Academic Journey</h2>{" "}
          <p className="text-justify mt-2 md:px-5 px-2 leading-relaxed">
            My educational foundation was laid at Maliyadeva College,
            Kurunegala, where I actively balanced academics with innovation and
            extracurricular leadership. I sat for the GCE Ordinary Level
            Examination achieving 8 A passes and 1 C, and continued into the
            Advanced Level physical science stream, securing straight A passes
            in Combined Mathematics, Physics, and Chemistry, along with an A for
            General English. This placed me with a commendable Z-score of 2.2132
            and a rank of 599 island-wide, enabling entry into one of the most
            prestigious engineering programs in the country. I further enriched
            my academic portfolio by completing a Diploma in Software
            Engineering at NIBM, Kurunegala, where I graduated with a
            Distinction (GPA: 3.911). This program helped me master core
            programming languages and tools that I now use every day. Currently,
            I am an undergraduate at the University of Moratuwa, Faculty of
            Engineering, studying Electronics and Telecommunication Engineering.
            I was honored to be placed on the Dean&apos;s List in my very first
            semester with a perfect SGPA of 4.00.
          </p>
        </div>
        <Image
          src={CDNFetch("/images/profile-photo.jpg")}
          width={300}
          height={300}
          alt="Picture of the author"
          className="md:w-1/3 m-5 mt-4 rounded-full shadow-2xl blur-mask -z-10 h-fit"
        />
      </div>
      <hr className="my-6" />
      <h2 className="text-3xl text-highlight">
        Technical Projects and Experience
      </h2>{" "}
      <p className="text-justify mt-2 md:mx-5 leading-relaxed">
        I&apos;ve had the opportunity to work on diverse technical projects,
        combining both hardware and software development.
      </p>
      <ul className="list-disc md:ms-14 ms-7 mt-2 leading-relaxed text-justify">
        <li className="mt-4">
          Robogames (Team LYNX): Designed and fabricated the 3D CAD model of a
          battle robot and supported component integration. Our team competed
          successfully, winning 2 matches.
        </li>
        <li className="mt-4">
          ThermoBand EN1190: A wearable health-monitoring device. I led the 3D
          design, component selection (ESP8266 + battery management), custom PCB
          co-design, firmware development, and backend integration with
          Express.js and Supabase.
        </li>
        <li className="mt-4">
          D-Mobile E-Commerce App: Designed and developed a full-stack web
          application for an electronics store, using ReactJS for the frontend,
          Express/Node.js for the backend, and MySQL for a relational database.
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-3xl text-highlight">Awards & Recognition</h2>
      <ul className="list-disc md:ms-14 ms-7 mt-2 leading-relaxed text-justify">
        <li className="mt-4">
          Robotic Minds Competition 2015 — 1st Place (National level)
        </li>
        <li className="mt-4">
          National Level Invention Competitions (2014-2015) — 1st, 2nd, and 3rd
          places at provincial and national level (“Sahasak Nimavum” by SLIC)
        </li>
        <li className="mt-4">
          National Stamp Exhibition 2017 — 1st Place (organized by the
          Philatelic Bureau)
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-3xl text-highlight ">
        Leadership & Extracurricular Activities
      </h2>
      <ul className="list-disc md:ms-14 ms-7 mt-2 leading-relaxed text-justify">
        <li className="mt-4">
          Vice Secretary, Philatelic Society - Maliyadeva College
        </li>
        <li className="mt-4">
          Treasurer, Inventors&apos; Club - Maliyadeva College
        </li>
        <li className="mt-4">
          Scout (2012-2020) - Committed member of the Maliyadeva Scout Troop,
          building resilience and leadership
        </li>
        <li className="mt-4">
          Board Member, Philatelic & Inventors&apos; Societies - Nurtured my
          interest in creativity, design, and innovation
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-3xl text-highlight">Looking Ahead</h2>
      <p className="text-justify mt-2 leading-loose md:px-5 px-2">
        I&apos;m deeply committed to bridging software and hardware through
        projects that improve lives and push technical boundaries. My goal is to
        become a multidisciplinary engineer, leveraging embedded systems,
        full-stack development, and AI to build scalable, intelligent solutions.
        Whether it&apos;s robotics, IoT, or smart wearables, I&apos;m excited to
        keep learning, building, and collaborating with like-minded innovators.
      </p>
    </main>
  );
};

export default page;
