import Image from "next/image";
import Github from "@svgs/Github";
import { CDNFetch } from "@utils/imageFetch";
const page = () => {
  return (
    <main className="mx-3">
      <h1 className="project-title">D-Mobile e-commerce website</h1>
      <div className="ms-2">
        <h2 className="text-3xl mt-3 underline">Overview</h2>
        <table className="mt-2 leading-relaxed md:mx-5 ">
          <thead>
            <tr>
              <th className="w-1/5"></th>
              <th className="w-auto"></th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr>
              <td>Role:</td>
              <td className="pb-4 text-justify">
                I was the full-stack developer for the D-Mobile e-commerce
                website, handling the frontend, backend, and database
                architecture. I designed and built a user-friendly React.js
                interface for product browsing and purchasing, and developed a
                robust Express.js + Node.js backend with RESTful APIs to support
                all core functions. The application includes secure user
                authentication, real-time inventory tracking, and online payment
                integration.
              </td>
            </tr>
            <tr>
              <td>Outcome:</td>
              <td className="pb-4 text-justify">
                The final product was a complete, fully functional e-commerce
                platform tailored for an electronics store. It streamlined the
                shopping experience from browsing to checkout, and featured a
                powerful admin panel for inventory and order management. The
                secure architecture and encrypted data handling ensured a safe
                and responsive user experience.
              </td>
            </tr>
            <tr>
              <td>Skills Applied:</td>
              <td className="pb-4 text-justify flex flex-wrap">
                <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                  React.js
                </span>
                <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                  Node.js
                </span>
                <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                  Express.js
                </span>
                <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                  MySQL
                </span>
                <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                  Authentication
                </span>
                <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                  API Development
                </span>
                <span className="px-2 py-1 mx-2 mb-2 bg-primary-light rounded-lg">
                  Full-Stack Engineering
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex">
          <div className="w-44   p-2 btn btn-hover my-1 me-3">
            <a
              href="https://github.com/NileshAm/final-project-client"
              target="_blank"
              className="text-sm rounded-lg"
            >
              <div className="flex">
                <Github className="w-4" />
                <span className=" underline ms-1 text-center">
                  Frontend Project Files
                </span>
              </div>
            </a>
          </div>
          <div className="w-44   p-2 btn btn-hover my-1 me-3">
            <a
              href="https://github.com/NileshAm/final-project-server"
              target="_blank"
              className="text-sm rounded-lg"
            >
              <div className="flex">
                <Github className="w-4" />
                <span className=" underline ms-1 text-center">
                  Backend Project Files
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">
          What I Did in the Web App Project
        </h2>
        <div className="flex md:flex-row flex-col leading-relaxed text-justify">
          <ol className="list-decimal ms-7 mt-2">
            <li className="my-4">
              <strong className="text-lg text-highlight">
                Front-End Development
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Built the user interface using React.js, ensuring a responsive
                  design and dynamic client-side rendering.
                </li>
                <li>Developed essential components such as:</li>
                <ul className="list-decimal md:ms-20 ms-10">
                  <li>Product listing and detail views</li>
                  <li>Shopping cart interactions</li>
                  <li>Checkout process</li>
                  <li>Order history section</li>
                  <li>Searching and filtering products</li>
                </ul>
              </ul>
            </li>
            <li className="my-4">
              <strong className="text-lg text-highlight">
                Back-End & API Development
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Built the server with Node.js and Express.js following RESTful
                  API architecture.
                </li>
                <li>
                  Implemented secure user authentication:
                  <ul className="list-decimal md:ms-20 ms-10">
                    <li>Password hashing (using bcrypt)</li>
                    <li>Session management</li>
                  </ul>
                </li>
                <li>
                  Created APIs for:
                  <ul className="list-decimal md:ms-20 ms-10">
                    <li>Product management</li>
                    <li>Inventory control</li>
                    <li>Order processing</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="my-4">
              <strong className="text-lg text-highlight">
                Database Design & Integration
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Designed a structured MySQL database with interconnected
                  tables:
                  <ul className="list-[circle] ms-16">
                    <li>
                      Users, Products, Orders, OrderItems, Inventory, etc.
                    </li>
                  </ul>
                </li>
                <ol className="ms-20 list-decimal"></ol>
                <li>
                  Established relational integrity with:
                  <ul className="list-decimal md:ms-20 ms-10">
                    <li>One-to-many and many-to-many SQL relationships</li>
                    <li>Cascading logic for product-stock consistency</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="my-4">
              <strong className="text-lg text-highlight">
                Security & Payment Integration
              </strong>
              <ul className="list-disc md:ms-7 ms-4">
                <li>
                  Applied best practices in data validation, error handling, and
                  authorization workflows.
                </li>
                <li>
                  Integrated a secure online payment gateway (Using Stripe):
                  <ul className="list-decimal md:ms-20 ms-10">
                    <li>Tokenized transactions</li>
                    <li>Verified payment status and feedback</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
          <Image
            src={"/images/a7adc748-48d8-43d4-872b-138398894027.jpg"}
            alt="D-Mobile e-commerce website"
            width={800}
            height={(800 * 9) / 16}
            className="md:mx-6 rounded-lg object-contain self-baseline"
          />
        </div>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Tech Stack</h2>
        <ol className="list-deciaml md:ms-7 mt-2 text-justify">
          <li className="my-4 flex w-full">
            <div className="w-1/3">Front-End:</div>
            <div className="w-2/3">React.js, Bootstrap</div>
          </li>
          <li className="my-4 flex w-full">
            <div className="w-1/3">Back-End:</div>
            <div className="w-2/3">
              Node.js, Express.js, session-based authurization, RESTful API
            </div>
          </li>
          <li className="my-4 flex w-full">
            <div className="w-1/3">Database:</div>
            <div className="w-2/3">
              MySQL with normalized schema and foreign key constraints
            </div>
          </li>
          <li className="my-4 flex w-full">
            <div className="w-1/3">Security:</div>
            <div className="w-2/3">
              Password hashing, Session management, data validation, error
              handling
            </div>
          </li>
          <li className="my-4 flex w-full">
            <div className="w-1/3">Front-End:</div>
            <div className="w-2/3">
              React.js, CSS Modules (or Tailwind), Context/Redux for state
            </div>
          </li>
        </ol>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Conclution</h2>
        <p className="mt-2 md:mx-5 text-justify leading-relaxed">
          The successful completion of the D-Mobile E-commerce platform resulted
          in a fully operational online storefront that streamlined the entire
          sales pipeline—from product display and inventory tracking to user
          orders and secure payment processing. The project showcases my ability
          to build scalable, full-stack applications with an emphasis on clean
          UI/UX design and efficient server-side architecture. Through this
          project, I gained hands-on experience in designing and implementing
          secure REST APIs, integrating real-time payment gateways, and managing
          complex MySQL database relationships to ensure data integrity and
          business logic consistency. Additionally, this system demonstrated my
          competence in building secure authentication mechanisms and deploying
          production-ready systems capable of supporting real-world use cases.
        </p>
      </div>
      <div className="m-3 mt-4">
        <h2 className="text-3xl underline font-bold">Gallery</h2>
        <div className="flex flex-wrap justify-evenly mt-5">
          <video
            controls
            className="rounded-lg md:w-2/3 -z-10"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={CDNFetch("/images/3ec5d47e-e935-4dd3-8acc-57327403c907.mp4")}
            />
          </video>
        </div>
      </div>
    </main>
  );
};

export default page;
