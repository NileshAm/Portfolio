import { ReactNode } from "react";

const Sections = ({
  id,
  heading,
  children,
  className = "",
}: {
  id: string;
  heading: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div id={id} className={"m-2 scroll-mt-16 " + className}>
      <h1 className="text-4xl">{heading}</h1>
      <hr className="mb-3" />
      {children}
      <hr className="mt-2" />
    </div>
  );
};

export default Sections;
