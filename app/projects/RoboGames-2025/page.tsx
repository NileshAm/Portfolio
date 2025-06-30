import Github from "@svgs/Github";
const page = () => {
  return (
    <>
      <table className="mt-2">
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
              I was responsible for the entire 3D design of the combat robot,
              from conceptual modeling to structural optimization. I also
              contributed to hardware part selection, ensuring the right balance
              of durability, speed, and agility for the competitive environment.
            </td>
          </tr>
          <tr>
            <td>Outcome:</td>
            <td className="pb-4 text-justify">
              Our robot won 2 battles against rival teams, a strong performance
              that demonstrated our design&apos;s resilience and combat
              efficiency. This project combined practical engineering, real-time
              problem-solving, and teamwork under pressure.
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
      <div className="w-36 p-2 btn btn-hover my-1">
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
    </>
  );
};

export default page;
