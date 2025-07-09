import { ReactNode } from "react";

const TopicList = ({
  children,
  id,
  heading,
  className = "",
  childrenClass = "",
}: {
  children: ReactNode;
  id: string;
  heading: string;
  className?: string;
  childrenClass?: string;
}) => {
  return (
    <li id={id} className={"scroll-mt-16 " + className}>
      <h3 className="text-lg underline">{heading}</h3>
      <div className={"flex " + childrenClass}>{children}</div>
    </li>
  );
};

export default TopicList;
