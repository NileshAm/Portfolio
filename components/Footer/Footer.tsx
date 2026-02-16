import LinkedIn from "@svgs/LinkedIn";
import Github from "@svgs/Github";
import Mail from "@svgs/Mail";
import Link from "next/link";
import Instagram from "@svgs/Instagram";
import Facebook from "@svgs/Facebook";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-surface mt-20 pt-16 pb-8 border-t border-white/5 content-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Section */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <a
                href="https://github.com/NileshAm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>NileshAm</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nilesh-amarathunge-b9a639348/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group"
              >
                <LinkedIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Nilesh Amarathunge</span>
              </a>
              <a
                href="mailto:nileshamarathunge@gmail.com"
                className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>nileshamarathunge@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6 text-center">
            <h3 className="text-xl font-bold text-white">Social Media</h3>
            <div className="flex flex-col gap-4 items-center">
              <a
                href="https://www.instagram.com/nilesh.a_?igsh=MTJoZHZwb2ttenJlOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@nilesh.a_</span>
              </a>
              <a
                href="https://www.facebook.com/share/1HrPvAraeo/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Nilesh Amarathunge</span>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-6 text-center md:text-right">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="flex flex-col gap-4 items-center md:items-end">
              <Link
                href="/education"
                className="text-textSecondary hover:text-accent transition-colors"
              >
                Education
              </Link>
              <Link
                href="/projects"
                className="text-textSecondary hover:text-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/cv"
                className="text-textSecondary hover:text-accent transition-colors"
              >
                CV
              </Link>
              <Link
                href="/about"
                className="text-textSecondary hover:text-accent transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-textSecondary">
            © {currentYear} Nilesh Amarathunge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
