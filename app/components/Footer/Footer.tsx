import LinkedIn from "@svgs/LinkedIn";
import Github from "@svgs/Github";
import Mail from "@svgs/Mail";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-wrap bg-primary-dark text-textSecondary text-center p-5 mt-16 ">
      <div className="w-1/4">
        <span className="text-xl">Contacts</span>
        <div className="flex flex-col justify-center gap-2 text-sm">
          <a
            href="https://github.com/NileshAm"
            target="_blank"
            className="flex hover:text-highlight transition-all hover:underline"
          >
            <Github className="w-6" />
            <span className="self-center ps-4">NileshAm</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nilesh-amarathunge-b9a639348/"
            target="_blank"
            className="flex hover:text-highlight transition-all hover:underline"
          >
            <LinkedIn className="w-6" />
            <span className="self-center ps-4">Nilesh Amarathunge</span>
          </a>

          <a
            href="mailto:your@email.com"
            className="flex hover:text-highlight transition-all hover:underline"
          >
            <Mail className="w-6" />
            <span className="self-center ps-4">
              nileshamarathunge@gmail.com
            </span>
          </a>
        </div>
      </div>
      <div className="w-1/4">
        <span className="text-xl">Links</span>
        <div className="flex flex-col justify-center gap-2 text-sm pt-1">
          <div>
            <Link
              href={"/education"}
              className="hover:text-highlight hover:underline transition-all"
            >
              Education
            </Link>
          </div>
          <div>
            <Link
              href={"/projects"}
              className="hover:text-highlight hover:underline transition-all"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              href={"/about"}
              className="hover:text-highlight hover:underline transition-all"
            >
              About me
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm ">
          © 2025 Nilesh Amarathunge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
