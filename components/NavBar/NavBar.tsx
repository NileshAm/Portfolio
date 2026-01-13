import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/education" },
    { name: "Projects", href: "/projects" },
    { name: "CV", href: "/cv" },
    { name: "About Me", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          NA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-textSecondary hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle (Checkbox Hack) */}
        <div className="md:hidden flex items-center">
          <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
          <label
            htmlFor="mobile-menu-toggle"
            className="text-white cursor-pointer z-50 relative"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Mobile Menu Overlay */}
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col items-center justify-start pt-20 space-y-8 top-[60px] overflow-y-auto h-[calc(100vh-60px)] pb-10">
            {navLinks.map((link) => (
              <label
                key={link.name}
                htmlFor="mobile-menu-toggle"
                className="cursor-pointer"
              >
                <Link
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </label>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
