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
    <div id={id} className={"scroll-mt-32 mb-10 last:mb-0 " + className}>
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-accent/90">
          {heading}
        </h2>
        <div className="h-px w-12 bg-accent/20"></div>
      </div>
      <div className="text-textSecondary leading-relaxed">{children}</div>
    </div>
  );
};

export default SectionTopic;
