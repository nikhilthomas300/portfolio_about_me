import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="mt-4 py-6 text-center text-sm text-gray-500 px-4 border-t
            dark:border-gray-800 border-gray-300 dark:bg-black"
      id="footerPortfolio"
    >
      <div className="flex justify-center gap-6 mb-2 text-lg">
        <Link
          href="mailto:nikhilthomas300@outlook.com"
          aria-label="Email"
          className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
        >
          <FaEnvelope />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nikhilthomas300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://github.com/nikhilthomas300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
        >
          <FaGithub />
        </Link>
        <Link
          href="mailto:<EMAIL>"
          target="_blank"
          aria-label="Email"
          className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
        >
          <FaEnvelope />
        </Link>
      </div>

      {/* Contact & Copyright section */}
      <div className="space-y-2">
        <p className="text-xs sm:text-sm">Bangalore, India • +91-9995804***</p>
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Nikhil Thomas • UI Module Lead & Frontend
          Engineer
        </p>
      </div>
    </footer>
  );
}
