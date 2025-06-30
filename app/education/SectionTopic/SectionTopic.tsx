import { ReactNode } from "react";

const SectionTopic = ({
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
    <div id={id} className={"mt-2 scroll-mt-16 " + className}>
      <h2 className="text-2xl">{heading}</h2>
      <hr className="mb-3" />
      {children}
    </div>
  );
};

export default SectionTopic;
