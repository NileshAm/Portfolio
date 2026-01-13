import Github from "@svgs/Github";
import Image from "next/image";
import { CDNFetch } from "@utils/imageFetch";

const page = () => {
  return (
    <main className="mx-3">
      <h1 className="project-title">EN2533 Robotics Challenge</h1>
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
                  I served as the Lead Electrical and Firmware Engineer for the
                  EN2533 Robotics Challenge. My role encompassed the complete
                  electrical architecture, component integration, and the
                  development of the robot&apos;s high-level firmware and user
                  interface.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Outcome:</td>
                <td className="pb-5 text-justify">
                  Developed a highly capable autonomous robot equipped with an
                  interactive display-based UI for task selection. The robot
                  successfully executed complex navigational and manipulation
                  tasks, demonstrating robust integration of hardware control
                  and software modularity.
                </td>
              </tr>
              <tr>
                <td className="font-bold">Skills Applied:</td>
                <td className="pb-5 text-justify flex flex-wrap">
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    PlatformIO
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    C++ (Arduino)
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Electrical Design
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Firmware Development
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    UI Design (Embedded)
                  </span>
                  <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                    Robotics Integration
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-36 p-2 btn btn-hover my-1 ms-5 md:mb-0 mb-3">
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
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">
          Electrical & Firmware Architecture
        </h2>
        <div className="flex lg:flex-row flex-col leading-relaxed text-justify">
          <ol className="list-decimal md:ms-7 mt-2 md:me-3 text-justify md:px-5 md:pe-10 ps-5 leading-relaxed">
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Full Electrical Design & Assembly
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Architected the power distribution and signal routing for
                  multiple sensors, motor drivers, and the central processing
                  unit.
                </li>
                <li>
                  Performed the final assembly and soldering of all electrical
                  subsystems, ensuring high reliability under dynamic operating
                  conditions.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Firmware Development with PlatformIO
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Leveraged PlatformIO in VSCode to build a modular firmware
                  structure, optimizing for rapid iteration and debugging.
                </li>
                <li>
                  Implemented PID control loops for precise motor speed and
                  position management, alongside sensor fusion for accurate
                  navigation.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Interactive UI & Display Integration
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Designed and implemented a custom UI on an onboard display,
                  allowing the user to select specific tasks and view real-time
                  robot status.
                </li>
                <li>
                  Developed a robust state machine to handle task selection,
                  execution, and error reporting, enhancing the robot&apos;s
                  autonomy and user-friendliness.
                </li>
              </ul>
            </li>
            <li className="my-6">
              <strong className="text-lg text-highlight">
                Component selection
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  We selected VLX53L0X TOF sensor for distanct measurement for
                  its accuarcy.
                </li>
                <li>
                  We selected JGB25-370 motor for its low speed hogh torque
                  performance which was testing in the ramp climping task. We
                  paired the motor with BTS7960B driver for its high current
                  handling capability.
                </li>
                <li>
                  For the grabber we used MG90 servo motors mainly due it the
                  metal gear desgin allowing us to hold the balls better. And we
                  implemented current sensing so we can had feedback on object
                  pickup and it enabled us to stop overloading the motors.
                </li>
                <li>
                  We selected Arduino mega 2560 mainly for the GPIO requirement
                  of our robot. it needed to support 2 motor controllers, 2
                  serco motors, 1 IR panel, 5 TOF sensors, and a another 2
                  motors for the shooting machanism.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Conclusion</h2>
        <p className="mt-2 text-justify leading-loose md:px-5">
          The EN2533 Robotics Challenge was a highlight of my undergraduate
          experience, offering the perfect opportunity to bridge the gap between
          electrical engineering and firmware development. By designing the
          entire electrical system and writing the firmware from scratch, I
          gained an appreciation for the complexities of hardware-software
          co-design. The addition of a display-based UI not only set our robot
          apart but also provided a vital interface for real-world interaction
          helping with tuning the robot and debugging. This project reinforced
          my ability to manage a full-stack robotics project and deliver a
          sophisticated, well-integrated machine capable of tackling complex
          autonomous tasks.
        </p>
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Gallery</h2>
        <div className="flex flex-wrap justify-evenly mt-4">
          <Image
            src={CDNFetch("/images/c5fbbc8b-4c4d-4ec9-ab18-ef8c424c56e4.png")}
            alt="ThermoBand image"
            width={600}
            height={400}
            className="mx-2 my-2 rounded-lg"
          />
          <Image
            src={CDNFetch("/images/2559919d-8ba5-4e3c-ae3e-aae3bef21372.png")}
            alt="ThermoBand image"
            width={400}
            height={400}
            className="mx-2 my-2 rounded-lg "
          />
        </div>
      </div>
    </main>
  );
};

export default page;
