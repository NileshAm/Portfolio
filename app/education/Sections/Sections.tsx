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
  // Use scroll-mt (scroll margin top) to offset the sticky header height
  return (
    <div
      id={id}
      className={
        "scroll-mt-28 relative bg-surface/50 border border-white/5 shadow-2xl backdrop-blur-sm rounded-3xl p-6 md:p-10 mb-16 overflow-hidden " +
        className
      }
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-transparent opacity-70"></div>

      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          {heading}
        </h1>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      {children}
    </div>
  );
};

export default Sections;
