import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="p-3 fixed w-full backdrop-blur bg-gradient-to-b from-primary-dark to-primary-dark/60">
        <ul className="space-x-4 justify-evenly flex">
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
            <Link href="/about" className="nav-link">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-3 text-primary">Nav</div>
    </>
  );
};

export default NavBar;
