import TableOfContents from "@comps/education/TableOfContents";
import Maliyadeva from "./Maliyadeva";
import NIBM from "./NIBM";
import UOM from "./UOM";

const Page = () => {
  return (
    <main className="container mx-auto px-4 pt-4 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-20 pb-20 order-2 lg:order-1">
          <UOM />
          <NIBM />
          <Maliyadeva />
        </div>

        {/* Sidebar TOC */}
        <div className="hidden lg:block lg:col-span-1 order-1 lg:order-2 relative">
          <TableOfContents />
        </div>

        {/* Mobile TOC is integrated inside the component itself as fixed/overlay */}
        <div className="lg:hidden">
          <TableOfContents />
        </div>
      </div>
    </main>
  );
};

export default Page;
