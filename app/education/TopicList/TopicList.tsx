import { ReactNode } from "react";

const TopicList = ({
  children,
  id,
  heading,
  className = "",
}: {
  children: ReactNode;
  id: string;
  heading: string;
  className?: string;
}) => {
  return (
    <li id={id} className={"scroll-mt-16 " + className}>
      <h3 className="text-lg underline">{heading}</h3>
      <div className="flex">{children}</div>
    </li>
  );
};

export default TopicList;
