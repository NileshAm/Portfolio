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
    <li
      id={id}
      className={
        "scroll-mt-32 mb-6 last:mb-0 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors " +
        className
      }
    >
      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-secondary"></span>
        {heading}
      </h3>
      <div className={" " + childrenClass}>{children}</div>
    </li>
  );
};

export default TopicList;
