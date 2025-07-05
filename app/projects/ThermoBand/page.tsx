import Github from "@svgs/Github";
import Viewer3D from "@comps/Viewer3D/Viewer3D";
// import Image from 'next/image';
// import { CDNFetch } from "@/app/utils/imageFetch";

const page = () => {
  return (
    <main className="mx-3">
      <h1 className="project-title">ThermoBand</h1>
      <div className="flex">
        <div className="ms-2 me-3">
          <h2 className="text-3xl mt-3 underline">Overview</h2>
          <table className="mt-2 leading-relaxed mx-5">
            <thead>
              <tr>
                <th className="w-1/5"></th>
                <th className="w-auto"></th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr>
                <td>Role:</td>
                <td className="pb-5 text-justify">
                  As the lead developer, I handled the full design and assembly
                  of ThermoBand: from 3D enclosure modeling in SolidWorks to
                  custom part and PCB selection, manufacturing, firmware
                  development (using ESP8266 for periodic temperature updates),
                  and backend integration with Express.js, JWT authentication,
                  and Supabase.
                </td>
              </tr>
              <tr>
                <td>Outcome:</td>
                <td className="pb-5 text-justify">
                  Delivered a fully functional IoT-enabled wearable prototype
                  that monitors body temperature in real time and syncs data to
                  a server. The project demonstrated a seamless blend of
                  mechanical design, embedded systems, and secure backend setup.
                </td>
              </tr>
              <tr>
                <td>Skills Applied:</td>
                <td className="pb-5 text-justify flex flex-wrap">
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Solidworks
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    PCB Design
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    ESP8266 Firmware
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Battery Management
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    PCB Assembly
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Wi-Fi Connectivity
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Express.js Backend
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    JWT Authentication
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Supabase Integration
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-36 p-2 btn btn-hover my-1">
            <a
              href="https://github.com/NileshAm/ThermoBand-EN1190"
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
          What I Did in the ThermoBand Project
        </h2>
        <div className="flex">
          <ol className="list-decimal ms-7 mt-2 me-3 text-justify px-5 pe-10 leading-relaxed">
            <li className="my-6">
              <strong className="text-lg text-highlight">
                3D Mechanical Design
              </strong>
              <ul className="list-disc ms-7">
                <li>
                  Modeled a compact and ergonomic enclosure in SolidWorks,
                  considering component fit, durability, and user comfort.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Component & PCB Design
              </strong>
              <ul className="list-disc ms-7">
                <li>
                  Selected the ESP8266 microcontroller as the core, and sourced
                  peripherals for temperature sensing, battery charging, and
                  power regulation.
                </li>
                <li>
                  Collaborated on the design of a custom PCB, ensuring proper
                  layout and connections between sensor, power, and
                  communication modules.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Manufacturing & Assembly
              </strong>
              <ul className="list-disc ms-7">
                <li>
                  Oversaw the fabrication process, including:
                  <ul className="list-decimal ms-20">
                    <li>Soldering SMD component to the manufaactured PCB</li>
                    <li>Ensuring all the coomponents are within tolerances</li>
                  </ul>
                </li>
                <li>assembling all components into the 3D-printed housing.</li>
                <ol className="ms-20 list-decimal"></ol>
                <li>
                  Ensured all selected parts would physically fit inside the
                  model I designed.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Firmware Development
              </strong>
              <ul className="list-disc ms-7">
                <li>
                  Wrote complete firmware for the ESP8266, implementing Wi-Fi
                  communication to a remote server, periodic temperature
                  updates, and error handling.
                </li>
                <li>
                  Ensured low-power operation and stable connection resilience.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Backend Integration & Security
              </strong>
              <ul className="ms-7 list-disc">
                <li>
                  Contributed to an Express.js backend, adding secure user
                  authentication using JWT and integrating with Supabase for
                  realtime data storage and user management.
                </li>
              </ul>
            </li>
          </ol>
          <Viewer3D
            src="https://cdn.jsdelivr.net/gh/NileshAm/ThermoBand-EN1190/public/Assembly.glb"
            className="w-1/2 h-max mx-auto my-5 p-3 bg-primary-light rounded-3xl"
          />
        </div>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Conclution</h2>
        <p className="mt-2 text-justify leading-loose px-5">
          In the end, the ThermoBand turned out to be a fully working wearable
          device that could track body temperature and send updates to a remote
          server over Wi-Fi. I was involved in pretty much every part of the
          process — from designing the outer case in SolidWorks to selecting the
          ESP8266 and other components, creating a custom PCB, and handling the
          full assembly of the device. On the software side, I wrote all the
          firmware for the microcontroller so it could collect temperature data
          and communicate with the backend. I also helped build the backend with
          Express.js, setting up secure user authentication with JWT tokens and
          storing everything using Supabase. This project taught me a lot — not
          just about hardware and coding, but also about how to bring everything
          together into a final product. It was a great hands-on experience that
          improved my confidence in handling both the technical and practical
          sides of building real-world tech.
        </p>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Gallery</h2>
        <div className="flex flex-wrap justify-evenly mt-4">
          {/* <Image
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
          /> */}
          <p>Images will be added sooon......</p>
        </div>
      </div>
    </main>
  );
};

export default page;
