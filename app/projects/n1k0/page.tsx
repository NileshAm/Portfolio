import Github from "@svgs/Github";
import Viewer3D from "@comps/Viewer3D/Viewer3D";
import Image from "next/image";
import { CDNFetch } from "@utils/imageFetch";
import Img from "@/components/ui/Img";

const page = () => {
  return (
    <main className="mx-3">
      <h1 className="project-title">N1K0 - Micromouse Project</h1>
      <div className="flex">
        <div className="ms-2 me-3 w-full">
          <h2 className="text-3xl mt-3 underline">Overview</h2>
          <table className="mt-2 leading-relaxed md:mx-5 w-full">
            <thead>
              <tr>
                <th className="w-1/5"></th>
                <th className="w-auto"></th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr>
                <td className="font-bold">Role:</td>
                <td className="pb-5 text-justify">
                  As the lead mechanical engineer for the N1K0 Micromouse
                  project, I was responsible for the complete mechanical design,
                  optimization, and final assembly. My primary focus was on
                  developing a high-performance drive system and ensuring
                  structural integrity for high-speed maze navigation.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Outcome:</td>
                <td className="pb-5 text-justify">
                  Successfully designed and manufactured a compact, robust
                  micromouse chassis featuring a custom 2-stage gear reduction
                  system. The mechanical system provided the necessary torque
                  and speed for competitive performance, demonstrating
                  proficiency in precision engineering and assembly.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Skills Applied:</td>
                <td className="pb-5 text-justify flex flex-wrap">
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    SolidWorks
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Mechanical Design
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Gear System Design
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Manufacturing
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Precision Assembly
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Prototyping
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-36 p-2 btn btn-hover my-1 ms-5 md:mb-0 mb-3">
            <a
              href="https://github.com/N1K0-micromouse/n1k0_v0.1"
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
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">
          Mechanical Systems & Design
        </h2>
        <div className="flex lg:flex-row flex-col leading-relaxed text-justify">
          <ol className="list-decimal md:ms-7 mt-2 md:me-3 text-justify md:px-5 md:pe-10 ps-5 leading-relaxed">
            <li className="my-6">
              <strong className="text-lg text-highlight">
                2-Stage Gear Reduction System
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Engineered a custom 1:6 reduction ratio 2-stage gear system to
                  optimize torque delivery from the motors to the wheels.
                </li>
                <li>
                  Calculated gear teeth profiles and tolerances to minimize
                  backlash and ensure smooth power transmission at high speeds.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Chassis Design & Optimization
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Used SolidWorks to model the entire mechanical assembly,
                  focusing on weight distribution and center of gravity to
                  improve stability during rapid turns.
                </li>
                <li>
                  Designed mounting points for sensors, PCB, and motors,
                  ensuring a compact and accessible layout.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Manufacturing & Assembly
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Managed the manufacturing process of custom parts, utilizing
                  precision machining and 3D printing where appropriate.
                </li>
                <li>
                  Handled the final assembly of the whole micromouse, ensuring
                  all mechanical and electrical components were perfectly
                  integrated.
                </li>
              </ul>
            </li>
          </ol>
          <div className="lg:w-1/2 w-full mx-auto my-5 p-3 bg-transparent rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-400">
            <Viewer3D
              src="https://cdn.jsdelivr.net/gh/NileshAm/Portfolio@latest/private/3D_models/N1k0.glb"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Conclusion</h2>
        <p className="mt-2 text-justify leading-loose md:px-5">
          The N1K0 project was a significant challenge that allowed me to apply
          theoretical mechanical engineering principles to a high-speed robotics
          application. Designing the 2-stage gear system was a highlight,
          requiring precise calculations and iterative prototyping to achieve
          the desired 1:6 reduction ratio. This project not only sharpened my
          skills in SolidWorks and mechanical design but also gave me valuable
          experience in the practical aspects of manufacturing and assembly. The
          resulting micromouse was a testament to the importance of a
          well-engineered mechanical foundation in robotics.
        </p>
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Gallery</h2>
        <div className="flex flex-wrap justify-evenly mt-4">
          <Img
            src={CDNFetch("/images/bb7da0fd-dfc8-4e2e-834a-c2e3f76dcbcd.jpg")}
            alt="ThermoBand image"
            className=" m-5 rounded-lg"
            containerClassName="w-1/3"
            aspectRatio={2828 / 1825}
          />
          <Img
            src={CDNFetch("/images/490d3c21-a598-4a6a-a1bd-e493b54b2f12.jpg")}
            alt="ThermoBand image"
            className=" m-5 rounded-lg"
            containerClassName="w-1/3 "
            aspectRatio={4000 / 2252}
          />
          <Img
            src={CDNFetch("/images/95007715-a384-4b90-b614-f93299b00be7.jpg")}
            alt="ThermoBand image"
            className=" m-5 rounded-lg"
            containerClassName="w-1/3 "
            aspectRatio={2252 / 1396}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
