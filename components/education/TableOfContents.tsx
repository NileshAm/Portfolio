"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaListUl } from "react-icons/fa";

// Re-using the structure concept but making it data-driven for cleaner rendering is better,
// strictly copying the structure is faster and safer for ensuring all links exist.
// I will keep the component structure but style it significantly better.

interface TOCItemProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

const TOCItem = ({ href, label, children }: TOCItemProps) => {
  return (
    <li className="mb-2">
      <Link
        href={href}
        className="block py-1 hover:text-accent transition-colors text-sm md:text-base text-textSecondary hover:underline decoration-accent/50 underline-offset-4"
      >
        {label}
      </Link>
      {children && (
        <div className="ml-4 border-l border-white/10 pl-2 mt-1">
          {children}
        </div>
      )}
    </li>
  );
};

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-50 bg-secondary text-white p-3 rounded-full shadow-lg shadow-secondary/25"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaChevronDown /> : <FaListUl />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-surface/95 backdrop-blur-xl border-l border-white/10 p-6 md:translate-x-0 md:bg-transparent md:backdrop-blur-none md:border-none md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:w-full md:block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 mb-6 text-highlight font-bold text-lg border-b border-white/10 pb-2">
          <FaListUl className="text-xl" />
          <span>Table of Contents</span>
        </div>

        <nav className="overflow-y-auto h-full pb-20 md:pb-0 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <ul className="space-y-1">
            <TOCItem href="#UOM" label="University of Moratuwa">
              <ul className="space-y-1">
                <TOCItem href="#UOMinfo" label="Info" />
                <TOCItem href="#UOMacademic" label="Academic" />
                <TOCItem href="#UOMprojects" label="Extra Curricular">
                  <ul className="space-y-1">
                    <TOCItem href="#UOMRobogames" label="IESL Robogames" />
                    <TOCItem
                      href="#UOMThermoBand"
                      label="ThermoBand Product Design"
                    />
                  </ul>
                </TOCItem>
              </ul>
            </TOCItem>

            <TOCItem href="#NIBM" label="NIBM">
              <ul className="space-y-1">
                <TOCItem href="#NIBMinfo" label="Info" />
                <TOCItem href="#NIBMacademic" label="Academic" />
                <TOCItem href="#NIBMprojects" label="Extra Curricular">
                  <ul className="space-y-1">
                    <TOCItem href="#NIBMDMobile" label="D-Mobile App" />
                  </ul>
                </TOCItem>
              </ul>
            </TOCItem>

            <TOCItem href="#Maliyadeva" label="Maliyadeva College">
              <ul className="space-y-1">
                <TOCItem href="#MaliyadevaInfo" label="Info" />
                <TOCItem href="#MaliyadevaAcademic" label="Academic" />
              </ul>
            </TOCItem>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;
