import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="p-3 fixed w-full backdrop-blur bg-gradient-to-b from-primary-dark to-primary-dark/60 z-50">
        {/* 🔒 Peer container: wrap checkbox and nav list */}
        <div className="md:flex md:items-center">
          {/* 👇 Hidden checkbox toggle */}
          <input id="nav-toggle" type="checkbox" className="peer hidden" />

          {/* 🔳 Hamburger icon for small screens */}
          <label
            htmlFor="nav-toggle"
            className="md:hidden text-textPrimary cursor-pointer flex justify-end"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* 🔗 Navigation Links — show/hide on peer check */}
          <ul className="peer-checked:flex hidden md:flex flex-col md:flex-row md:justify-evenly md:w-full items-center mt-4 md:mt-0 text-textPrimary">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/education" className="nav-link">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cv" className="nav-link">
                CV
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="p-3 text-primary">Nav</div>
    </>
  );
};

export default NavBar;
