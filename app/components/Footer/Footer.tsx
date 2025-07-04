import LinkedIn from "@svgs/LinkedIn";
import Github from "@svgs/Github";
import Mail from "@svgs/Mail";
import Link from "next/link";
import Instagram from "@svgs/Instagram";
import Facebook from "@svgs/Facebook";
import LinkSVG from "@svgs/LinkSVG";

const Footer = () => {
  return (
    <footer className="flex flex-wrap bg-primary-dark text-textSecondary text-center p-5 mt-16 justify-evenly">
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
      <div className="w-1/4 text-center ">
        <span className="text-xl">Social media</span>
        <div className="flex flex-col justify-center gap-2 text-sm pt-1">
          <div>
            <Link
              href={
                "https://www.instagram.com/nilesh.a_?igsh=MTJoZHZwb2ttenJlOQ=="
              }
              target="_blank"
              className="flex hover:text-highlight hover:underline transition-all"
            >
              <Instagram className="w-6" />
              <span className="ps-4 self-center">nilesh.a_</span>
            </Link>
          </div>
          <div>
            <Link
              href={
                "https://www.facebook.com/share/1HrPvAraeo/?mibextid=qi2Omg"
              }
              target="_blank"
              className="flex hover:text-highlight hover:underline transition-all"
            >
              <Facebook className="w-6" />
              <span className="ps-4 self-center">Nilesh Amarathunge</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <span className="text-xl">Links</span>
        <div className="flex flex-col justify-center gap-2 text-sm pt-1">
          <div>
            <Link
              href={"/education"}
              className="flex hover:text-highlight hover:underline transition-all"
            >
              <LinkSVG className="w-4" />
              <span className="ps-4 self-center">Education</span>
            </Link>
          </div>
          <div>
            <Link
              href={"/projects"}
              className="flex hover:text-highlight hover:underline transition-all"
            >
              <LinkSVG className="w-4" />
              <span className="ps-4 self-center">Projects</span>
            </Link>
          </div>
          <div>
            <Link
              href={"/cv"}
              className="flex hover:text-highlight hover:underline transition-all"
            >
              <LinkSVG className="w-4" />
              <span className="ps-4 self-center">CV</span>
            </Link>
          </div>
          <div>
            <Link
              href={"/about"}
              className="flex hover:text-highlight hover:underline transition-all"
            >
              <LinkSVG className="w-4" />
              <span className="ps-4 self-center">About Me</span>
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
