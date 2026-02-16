import Github from "@svgs/Github";
import Viewer3D from "@comps/Viewer3D/Viewer3D";
import Image from "next/image";
import { CDNFetch } from "@utils/imageFetch";
import Img from "@/components/ui/Img";

const page = () => {
  return (
    <main className="mx-3">
      <h1 className="project-title">Analog Noise Cancelling Headphone</h1>
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
                  I was in charge of the entire electronic system for the analog
                  noise-cancelling headphones. This involved everything from the
                  initial schematic design to PCB layout, component sourcing,
                  and final assembly and testing.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Outcome:</td>
                <td className="pb-5 text-justify">
                  Delivered a fully functional prototype of analog
                  noise-cancelling headphones. The project provided a deep
                  understanding of analog signal processing, operational
                  amplifier circuits, and high-precision PCB design using Altium
                  Designer.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Skills Applied:</td>
                <td className="pb-5 text-justify flex flex-wrap">
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Altium Designer
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Analog Electronics
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    PCB Design
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Component Selection
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    PCB Assembly
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Signal Processing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-36 p-2 btn btn-hover my-1 ms-5 md:mb-0 mb-3">
            <a
              href="https://github.com/NileshAm/Hertz-Noise_Cancelling_Headphones"
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
          Electronic Design & Engineering
        </h2>
        <div className="flex lg:flex-row flex-col leading-relaxed text-justify">
          <ol className="list-decimal md:ms-7 mt-2 md:me-3 text-justify md:px-5 md:pe-10 ps-5 leading-relaxed">
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Analog Circuit Design
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Designed a fully analog noise-cancellation circuit using
                  op-amp based inverting amplifiers and filters to phase-invert
                  ambient noise.
                </li>
                <li>
                  Designed a all pass filter with a group delay in order to
                  delay the electronically modified signal to compensate for the
                  different speed travel of light and sound.
                </li>
                <li>
                  Implemented precision gain control and frequency compensation
                  to ensure stable noise cancellation across the audible
                  spectrum.
                </li>
                <li>
                  Headphones were capable of cancelling noises in each ear
                  independantly of each other causing a far greater effect of
                  cancelling noise.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                PCB Design with Altium Designer
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Developed a multi-layer PCB layout in Altium Designer,
                  focusing on signal integrity and noise isolation between the
                  audio and power sections.
                </li>
                <li>
                  Optimized component placement for a compact form factor that
                  fits seamlessly within the headphone enclosure.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Component Selection & Assembly
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Conducted thorough research to select high-quality low-noise
                  operational amplifiers and passive components to maintain
                  audio fidelity.
                </li>
                <li>
                  Hand-soldered and assembled the prototype PCBs, performing
                  rigorous testing and debugging of the analog stages.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Conclusion</h2>
        <p className="mt-2 text-justify leading-loose md:px-5">
          Developing these analog noise-cancelling headphones was a
          transformative experience in my electronics engineering journey. It
          pushed me to delve deep into the nuances of analog electronics, where
          every component choice and trace layout can significantly impact
          performance. Mastering Altium Designer for this project was a major
          milestone, allowing me to transition from simple breadboard prototypes
          to professional-grade PCB designs. The project successfully
          demonstrated that effective noise cancellation can be achieved through
          pure analog means, providing a rich, immersive audio experience while
          teaching me the intricacies of high-fidelity signal processing.
        </p>
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Gallery</h2>
        <div className="flex flex-wrap justify-evenly mt-4">
          <Img
            src={CDNFetch("/images/0e3e650e-163d-4c91-8ece-73885bd5730b.jpg")}
            alt="Headphone Image"
            containerClassName="w-1/3"
            className="m-5 rounded-lg"
            aspectRatio={1280/720}
            />
          <Img
            src={CDNFetch("/images/3ece981b-26ae-48db-8bca-b2fc7a97f510.jpg")}
            alt="Headphone Image"
            containerClassName="w-1/3 "
            className="m-5 rounded-lg"
            aspectRatio={2992/2856}
            />
          <Img
            src={CDNFetch("/images/5aafe34a-c073-474c-8aa3-7177c522bbe5.jpg")}
            alt="Headphone Image"
            containerClassName="w-1/3 "
            className="m-5 rounded-lg"
            aspectRatio={2992/2848}
            />
          <Img
            src={CDNFetch("/images/5b83d79b-60a1-4141-9158-2f55e1990dd9.jpg")}
            alt="Headphone Image"
            containerClassName="w-1/3 "
            className="m-5 rounded-lg"
            aspectRatio={2252/3056}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
