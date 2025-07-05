import Viewer3D from "@comps/Viewer3D/Viewer3D";
import { CDNFetch } from "@utils/imageFetch";
import Github from "@svgs/Github";
import Image from "next/image";
const page = () => {
  return (
    <main className="px-3">
      <h1 className="project-title">Robogames 2025</h1>
      <div className="flex">
        <div className="ms-2">
          <h2 className="text-3xl mt-3 underline">Overview</h2>
          <table className="mt-2 mx-5">
            <thead>
              <tr>
                <th className="w-1/5"></th>
                <th className="w-auto"></th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr>
                <td>Role:</td>
                <td className="pb-5 text-justify leading-relaxed">
                  I was responsible for the entire 3D design of the combat
                  robot, from conceptual modeling to structural optimization. I
                  also contributed to hardware part selection, ensuring the
                  right balance of durability, speed, and agility for the
                  competitive environment.
                </td>
              </tr>
              <tr>
                <td>Outcome:</td>
                <td className="pb-5 text-justify leading-relaxed">
                  Our robot won 2 battles against rival teams, a strong
                  performance that demonstrated our design&apos;s resilience and
                  combat efficiency. This project combined practical
                  engineering, real-time problem-solving, and teamwork under
                  pressure.
                </td>
              </tr>
              <tr>
                <td>Skills Applied:</td>
                <td className="pb-4 text-justify flex flex-wrap">
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Solidworks
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Mechanical Design
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Part Selection
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Team Collaboration
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Competitive Robotics
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-36 p-2 btn btn-hover my-1 ms-5">
            <a
              href="https://github.com/NileshAm/RoboGames-TeamLynx"
              target="_blank"
              className="text-sm rounded-lg"
            >
              <div className="flex">
                <Github className="w-4" />
                <span className=" underline ms-1">Project Files</span>
              </div>
            </a>
          </div>
        </div>
        <Image
          src={"/images/2784a8a5-d139-4956-869e-abfd2278b6d2.jpg"}
          alt="Robogames 2025"
          width={300}
          height={300}
          className="mx-6 rounded-lg"
        />
      </div>
      <div className="m-3">
        <h2 className="text-3xl underline font-bold">
          My Role and Responsibilities
        </h2>
        <p className="mt-2 text-justify">
          As a key member of Team LYNX, I undertook multiple critical
          responsibilities:
        </p>
        <ol className="list-decimal ms-7 mt-2 leading-relaxed px-5">
          <li>
            <div className="flex my-5">
              <strong className="w-1/6 text-highlight">
                Lead Mechanical Designer:
              </strong>
              <p className="w-5/6">
                I was solely responsible for the entire 3D design of our battle
                bot. Using SolidWorks, I developed and iteratively refined a CAD
                model that accounted for structural integrity, part placement,
                accessibility for repairs, and weight balance.
              </p>
            </div>
          </li>
          <li>
            <div className="flex my-5 w-full">
              <strong className="w-1/6 text-highlight">
                Component Selection Support:
              </strong>
              <p className="w-5/6">
                I collaborated in the hardware component selection, helping
                choose the optimal motors, ESCs, battery packs, wheels, chassis
                materials, and weapon mechanisms based on expected loads,
                available budget, and combat strategies.
              </p>
            </div>
          </li>
          <li>
            <div className="flex my-5">
              <strong className="w-1/6 text-highlight">
                Team Collaboration & Build Assistance:
              </strong>
              <p className="w-5/6">
                I worked closely with teammates on assembling the robot,
                troubleshooting mechanical fit issues, and making real-time
                design adjustments as needed.
              </p>
            </div>
          </li>
          <li>
            <div className="flex my-5">
              <strong className="w-1/6 text-highlight">
                Competition Performance:
              </strong>
              <p className="w-5/6">
                The bot we built won 2 consecutive battles, proving our
                design&apos;s effectiveness. The structure withstood direct
                hits, and the component integration worked seamlessly under
                pressure.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">
          What I Did in the RoboGames Project
        </h2>
        <div className="flex leading-relaxed">
          <ol className="list-decimal ms-7 mt-2">
            <li className="my-5">
              <strong className="text-lg text-highlight">
                Requirements Gathering
              </strong>
              <ul className="list-disc ms-7">
                <li>
                  Discussed competition rules, weight class, size limits, and
                  weapon restrictions.
                </li>
                <li>
                  Worked with teammates to define design priorities: speed,
                  armor, and stability.
                </li>
              </ul>
            </li>
            <li className="my-5">
              <strong className="text-lg text-highlight">
                3D Modeling in SolidWorks
              </strong>
              <ul className="list-disc ms-7">
                <li>Started with initial sketches and dimensional layouts.</li>
                <li>Modeled the full chassis including:</li>
                <ul className="list-decimal ms-20">
                  <li>Motor mounts</li> <li>Wheel cutouts</li>
                  <li>Weapon housing</li>
                  <li>Removable panels for maintenance access Used</li>
                </ul>
              </ul>
            </li>
            <li className="my-5">
              <strong className="text-lg text-highlight">Part Selection</strong>
              <ul className="list-disc ms-7">
                <li>
                  Helped analyze and compare:
                  <ul className="list-decimal ms-20">
                    <li>Brushless vs. brushed motors</li>
                    <li>ESCs for torque/speed control</li>
                    <li>LiPo battery capacity and discharge ratings</li>
                  </ul>
                </li>
                <ol className="ms-20 list-decimal"></ol>
                <li>
                  Ensured all selected parts would physically fit inside the
                  model I designed.
                </li>
              </ul>
            </li>
            <li className="my-5">
              <strong className="text-lg text-highlight">
                Fabrication and Assembly
              </strong>
              <ul className="list-disc ms-7">
                <li>Shared design files for laser cutting and 3D printing.</li>
                <li>Assisted in the physical assembly of components.</li>
                <li>Verified alignment and mounting tolerances.</li>
              </ul>
            </li>
            <li className="my-5">
              <strong className="text-lg text-highlight">
                Testing and Iteration
              </strong>
              <ul className="ms-7 list-disc">
                <li>Participated in dry runs and drive tests.</li>
                <li>
                  Identified minor issues in clearance and access panels, then
                  revised the 3D model accordingly.
                </li>
                <li>Reinforced weak points with bracing elements.</li>
                <li>
                  Removed unnessasary elements that was not contributing to the
                  durability of the bot to reduce weight.
                </li>
              </ul>
            </li>
            <li className="my-5">
              <strong className="text-lg text-highlight">
                Competition and On-the-Spot Fixes
              </strong>
              <ul className="ms-7 list-disc">
                <li>
                  Provided design support for last-minute adjustments after
                  battle damage.
                </li>
                <li>
                  Supported team strategy with quick mechanical checks between
                  rounds.
                </li>
              </ul>
            </li>
          </ol>
          <Viewer3D
            src="https://cdn.jsdelivr.net/gh/NileshAm/RoboGames-TeamLynx@latest/public/Assembly.glb"
            className="w-1/2 h-max mx-auto my-5 p-3 bg-primary-light rounded-3xl"
          />
        </div>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Conclution</h2>
        <p className="mt-2 text-justify leading-relaxed px-5">
          The RoboGames project was a complete engineering-to-execution journey,
          where I transformed ideas into a fully functional, battle-ready robot.
          From digital 3D modeling in SolidWorks to hands-on assembly and
          real-time combat testing, this experience honed my skills in
          mechanical engineering, precision design, component selection, and
          system integration. I played a central role in not only crafting the
          robot&apos;s structural design but also collaborating with the team on
          optimizing hardware choices and ensuring that the final build was both
          durable and competitive. This project pushed me beyond theoretical
          knowledge, into the world of practical problem-solving and rapid
          iteration, especially under the pressures of a timed competition.
          Winning two battles validated the effectiveness of our design and
          teamwork. More importantly, RoboGames allowed me to develop
          leadership, technical confidence, and adaptability—essential traits
          for any real-world engineering challenge. It was a defining experience
          that deepened my passion for robotics and reinforced my commitment to
          continuous learning and innovation in engineering.
        </p>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Gallery</h2>
        <div className="flex flex-wrap justify-evenly mt-4">
          <Image
            src={CDNFetch("/images/9f540a0e-9302-4341-aeda-7d520acef92c.jpg")}
            alt="Robogames 2025"
            width={500}
            height={500}
            className="mx-2 my-2 rounded-lg"
          />
          <Image
            src={CDNFetch("/images/e1a06a91-7854-4188-a68a-3fb596bc37df.jpg")}
            alt="Robogames 2025"
            width={750}
            height={500}
            className="mx-2 my-2 rounded-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
