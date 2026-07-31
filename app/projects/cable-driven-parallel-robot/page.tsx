import type { Metadata } from "next";
import Image from "next/image";
import Github from "@svgs/Github";
import Img from "@comps/ui/Img";
import { CDNFetch } from "@utils/imageFetch";

export const metadata: Metadata = {
  title: "Cable-Driven Parallel Robot",
  description:
    "Team leadership, system architecture, PCB design, and STM32 firmware development for a cable-driven parallel robot.",
};

const skills = [
  "Team Leadership",
  "System Architecture",
  "Altium Designer",
  "PCB Design",
  "STM32G0",
  "STM32 HAL",
  "Embedded C",
  "Classic CAN",
  "Closed-Loop Control",
  "Hardware Debugging",
];

const architecture = [
  {
    number: "01",
    title: "Motion commands",
    description:
      "The host prepares buffered position, velocity, and tension command data for each cable axis.",
  },
  {
    number: "02",
    title: "CAN network",
    description:
      "Classic CAN distributes addressed commands and synchronized updates across the motor controllers.",
  },
  {
    number: "03",
    title: "STM32 controller",
    description:
      "Each controller combines encoder feedback with feed-forward and PID correction at 1 kHz.",
  },
  {
    number: "04",
    title: "Cable winch",
    description:
      "A TMC2209 receives STEP/DIR signals to move the winch while the AS5600 closes the position loop.",
  },
];

const contributions = [
  {
    title: "Team leadership",
    description:
      "Led a multidisciplinary team of five engineers, coordinated subsystem ownership, and kept the electrical, firmware, and mechanical work aligned around shared interfaces.",
  },
  {
    title: "System architecture",
    description:
      "Played a major role in shaping the distributed control architecture, including the boundaries between the host controller, CAN network, motor-control nodes, encoders, and cable winches.",
  },
  {
    title: "Motor-controller PCB",
    description:
      "Designed the custom motor-controller PCB in Altium Designer, translating the controller requirements into a board that integrated the STM32, motor-driver, encoder, communication, and debug interfaces.",
  },
  {
    title: "STM32 firmware",
    description:
      "Developed firmware around the STM32 HAL and CubeMX configuration, separating peripheral setup, communication, encoder acquisition, motion control, step generation, and diagnostics into focused modules.",
  },
  {
    title: "Closed-loop motion",
    description:
      "Implemented a 1 kHz position-control path using DMA-based AS5600 feedback, multi-turn position tracking, feed-forward plus PID correction, and acceleration and velocity limiting.",
  },
  {
    title: "Communication and debugging",
    description:
      "Built the addressed Classic CAN command flow, synchronized command buffering, controller telemetry, UART diagnostics, and fault handling needed to integrate and test the subsystem.",
  },
];

const mediaPath = "/images/Cable_driven_parrellal_robot";

const galleryImages = [
  {
    src: `${mediaPath}/20260704_143454.jpg`,
    alt: "Team Lumon engineers during an on-site technical briefing in an industrial facility",
    caption: "Team Lumon during an on-site technical review",
    wide: true,
  },
  {
    src: `${mediaPath}/20260729_212547.jpg`,
    alt: "Close-up of the custom Team Lumon motor-controller PCB installed on the robot",
    caption: "Custom motor-controller PCB designed in Altium Designer",
    wide: false,
  },
  {
    src: `${mediaPath}/IMG-20260422-WA0127.jpg`,
    alt: "Team Lumon logo",
    caption: "Team Lumon",
    wide: false,
  },
];

const galleryVideos = [
  {
    src: `${mediaPath}/20260722_123631.mp4`,
    caption: "Cable-driven parallel robot motion test",
    ariaLabel: "Cable-driven parallel robot motion test",
  },
  {
    src: `${mediaPath}/20260721_234540_1.mp4`,
    caption: "Additional cable-driven parallel robot test footage",
    ariaLabel: "Additional cable-driven parallel robot test footage",
  },
];

const Page = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        Team Lumon · Robotics
      </p>
      <h1 className="project-title">Cable-Driven Parallel Robot</h1>

      <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
        <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-2xl shadow-primary/5 sm:p-8">
          <h2 className="text-3xl font-bold text-white">Overview</h2>

          <dl className="mt-6 space-y-6 leading-relaxed">
            <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
              <dt className="font-bold text-primary-light">Role</dt>
              <dd className="text-textSecondary">
                Team Lead and Motor Controller/Firmware Engineer. I led a team
                of five engineers, took primary responsibility for the
                motor-control electronics and firmware, and was a major
                contributor to the robot&apos;s system architecture.
              </dd>
            </div>

            <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
              <dt className="font-bold text-primary-light">Result</dt>
              <dd className="text-textSecondary">
                Developed an STM32G0-based closed-loop motor-control platform
                that receives synchronized motion commands over CAN, tracks
                absolute cable position, and drives a stepper motor through a
                dedicated TMC2209 stage.
              </dd>
            </div>

            <div className="grid gap-3 sm:grid-cols-[8rem_1fr]">
              <dt className="font-bold text-primary-light">Skills</dt>
              <dd className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary-light"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <a
            href="https://github.com/team-lumon"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-highlight px-5 py-3 font-semibold text-black transition-transform hover:scale-105 hover:bg-highlight-light"
          >
            <Github className="w-5" />
            View Project on GitHub
          </a>
        </div>

        <Img
          src={CDNFetch(`${mediaPath}/20260722_000959.jpg`)}
          alt="Complete cable-driven parallel robot with its frame, cable winches, and central moving platform"
          containerClassName="w-full"
          className="rounded-2xl border border-white/10 shadow-2xl shadow-accent/10"
          aspectRatio={1848 / 2350}
          loading="eager"
          preload
          sizes="(max-width: 1024px) 100vw, 44vw"
        />
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            System architecture
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            From coordinated motion to cable movement
          </h2>
          <p className="mt-3 leading-relaxed text-textSecondary">
            I helped define a distributed architecture in which a central host
            coordinates independent motor-control nodes. This kept
            time-critical motor control local while allowing the robot to
            synchronize multiple cable axes over a shared CAN network.
          </p>
        </div>

        <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {architecture.map((item) => (
            <li
              key={item.number}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6"
            >
              <span className="text-4xl font-black text-primary/25">
                {item.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            My contribution
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Leading the team and driving the motor-control subsystem
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {contributions.map((contribution, index) => (
            <article
              key={contribution.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-background p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 font-bold text-secondary-light">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {contribution.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-textSecondary">
                    {contribution.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Controller stack
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Hardware and firmware working as one system
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["MCU", "STM32G0B1CBT6 · Arm Cortex-M0+ · 64 MHz"],
              ["Motor stage", "TMC2209 over UART with STEP/DIR control"],
              ["Feedback", "AS5600 12-bit magnetic encoder over I²C DMA"],
              ["Network", "Classic CAN · 500 kbit/s · addressed nodes"],
              ["Control", "1 kHz feed-forward and PID position loop"],
              ["Toolchain", "STM32CubeMX · HAL · CMake · Ninja · GNU Arm"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/5 bg-background/70 p-4"
              >
                <p className="text-sm font-semibold text-primary-light">
                  {label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-textSecondary">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="project-gallery">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Project media
          </p>
          <h2
            id="project-gallery"
            className="mt-2 text-3xl font-bold text-white"
          >
            Robot, controller, and testing
          </h2>
          <p className="mt-3 leading-relaxed text-textSecondary">
            Development footage and hardware close-ups from the complete
            cable-driven parallel robot.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
          {galleryVideos.map((video) => (
            <figure
              key={video.src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60"
            >
              <video
                controls
                muted
                playsInline
                preload="metadata"
                poster={CDNFetch(`${mediaPath}/20260722_000959.jpg`)}
                aria-label={video.ariaLabel}
                className="aspect-square w-full bg-black object-contain"
              >
                <source src={CDNFetch(video.src)} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption className="flex flex-col gap-2 border-t border-white/10 px-5 py-4 text-sm text-textSecondary sm:flex-row sm:items-center sm:justify-between">
                <span>{video.caption}</span>
                <a
                  href={CDNFetch(video.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-light underline underline-offset-4 hover:text-accent"
                >
                  Open video
                </a>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-5 grid items-start gap-5 md:grid-cols-2">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className={`overflow-hidden rounded-2xl border border-white/10 bg-surface/60 ${
                image.wide ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-black/50 ${
                  image.wide ? "aspect-[4000/1848]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={CDNFetch(image.src)}
                  alt={image.alt}
                  fill
                  sizes={
                    image.wide
                      ? "(max-width: 1280px) 100vw, 80vw"
                      : "(max-width: 768px) 100vw, 40vw"
                  }
                  className="object-contain transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm text-textSecondary">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mb-6 mt-16">
        <h2 className="text-3xl font-bold text-white">What I learned</h2>
        <p className="mt-4 max-w-4xl text-justify leading-loose text-textSecondary">
          This project strengthened my ability to move between system-level
          decisions and implementation details. I gained practical experience
          designing a PCB in Altium Designer, structuring embedded firmware,
          working with the STM32 HAL, integrating communication and sensing
          peripherals, and debugging the boundary between hardware and
          software. Leading the team also taught me how clear interfaces and
          shared architectural decisions make parallel engineering work more
          effective.
        </p>
      </section>
    </main>
  );
};

export default Page;
