import { CDNFetch } from "@/utils/imageFetch";
import Image from "next/image";

const page = () => {
  return (
    <main className="px-3">
      <h1 className="project-title">Falcon E Racing</h1>
      <div className="flex xl:flex-row flex-col">
        <div className="ms-2 xl:w-1/2">
          <h2 className="text-3xl mt-3 underline">Overview</h2>
          <table className="mt-2 md:mx-5 mx-2 w-full">
            <thead>
              <tr>
                <th className="w-1/4"></th>
                <th className="w-3/4"></th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr>
                <td className="font-bold py-2">Role:</td>
                <td className="pb-5 text-justify leading-relaxed">
                  Low Voltage Engineer. I was deeply involved with the
                  university&apos;s Formula Student electric vehicle team. My
                  core responsibilities centered around the battery cart,
                  critical wiring harnesses, and custom PCBs.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-2">Outcome:</td>
                <td className="pb-5 text-justify leading-relaxed">
                  Successfully designed and manufactured robust low-voltage PCBs
                  ensuring seamless communication and power delivery throughout
                  the race car. Additionally, the battery cart wiring was
                  crucial for the team&apos;s efficient testing and overall
                  safety protocols.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-2">Skills Applied:</td>
                <td className="pb-4 text-justify flex flex-wrap">
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    PCB Design
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Manufacturing
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Wiring & Harnessing
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Low Voltage Systems
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Team Collaboration
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="xl:w-1/2 mt-6 xl:mt-0 flex justify-center items-start">
          <Image
            src={
              "/images/Falcon_E_Racing_E2/6afcc2ad-1efb-43d0-8502-77b5ba427c46.webp"
            }
            alt="Falcon E Racing"
            width={200}
            height={100}
            className="md:mx-6 rounded-lg md:w-auto w-full h-auto shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="m-3 mt-8">
        <h2 className="text-3xl underline font-bold">
          My Role and Responsibilities
        </h2>
        <p className="mt-2 text-justify">
          As a Low Voltage Engineer for Falcon E Racing, my duties were critical
          to the electrical safety and functionality of the race car:
        </p>
        <ol className="list-decimal md:ms-7 mt-2 leading-relaxed md:px-5 ps-5">
          <li>
            <div className="flex my-5 flex-col md:flex-row">
              <strong className="md:w-1/3 text-highlight mb-2 md:mb-0">
                Battery Cart & Wiring:
              </strong>
              <p className="md:w-5/6 text-justify">
                Engineered the wiring strategy for the accumulator cart,
                ensuring clear labeling, robust connections, and safety
                mechanism implementations crucial for maintaining high voltage
                systems securely.
              </p>
            </div>
          </li>
          <li>
            <div className="flex my-5 flex-col md:flex-row">
              <strong className="md:w-1/3 text-highlight mb-2 md:mb-0">
                PCB Design & Manufacturing:
              </strong>
              <p className="md:w-5/6 text-justify">
                Tasked with the end-to-end process of developing low voltage
                printed circuit boards. From schematic design to layout routing,
                rendering, and handling the manufacturing process to meet
                stringent motorsport rules.
              </p>
            </div>
          </li>
          <li>
            <div className="flex my-5 flex-col md:flex-row">
              <strong className="md:w-1/3 text-highlight mb-2 md:mb-0">
                System Integration:
              </strong>
              <p className="md:w-5/6 text-justify">
                Ensuring that low voltage PCBs communicated effectively with
                motor controllers, sensory equipment, and telematic devices
                mounted on the car.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Gallery</h2>
        <div className="flex flex-wrap justify-evenly mt-4">
          <Image
            src={CDNFetch(
              "/images/Falcon_E_Racing_E2/6afcc2ad-1efb-43d0-8502-77b5ba427c46.webp",
            )}
            alt="Robogames 2025"
            width={750}
            height={500}
            className="mx-2 my-2 rounded-lg"
          />
          <Image
            src={CDNFetch(
              "/images/Falcon_E_Racing_E2/1986d126-9d51-42e2-a5dd-c9f9449c7d99.webp",
            )}
            alt="Robogames 2025"
            width={250}
            height={500}
            className="mx-2 my-2 rounded-lg"
          />
          <Image
            src={CDNFetch(
              "/images/Falcon_E_Racing_E2/015ccb09-46b2-4d9e-a90b-912aa462bbd6.webp",
            )}
            alt="Robogames 2025"
            width={750}
            height={500}
            className="mx-2 my-2 rounded-lg"
          />
          <Image
            src={CDNFetch(
              "/images/Falcon_E_Racing_E2/becdaf67-79a6-47b4-bee8-b2501a501d6d.webp",
            )}
            alt="Robogames 2025"
            width={500}
            height={250}
            className="mx-2 my-2 rounded-lg"
          />
          <Image
            src={CDNFetch(
              "/images/Falcon_E_Racing_E2/e23aae3c-b215-4c6c-816a-1a0cfa93c703.webp",
            )}
            alt="Robogames 2025"
            width={1000}
            height={750}
            className="mx-2 my-2 rounded-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
