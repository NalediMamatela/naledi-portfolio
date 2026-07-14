import {
  FaLinkedin,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-pink-400">
              Naledi Mamatela
            </h2>

            <p className="text-gray-400 mt-2">
              Information Technology Graduate • Web Developer • Google Ads Specialist
            </p>

          </div>

          {/* Socials */}

          <div className="flex gap-6 text-3xl">

            <a
              href="https://www.linkedin.com/in/naledi-mamatela-8278b4270"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/NalediMamatela"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <FaGithub />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">

          <p className="text-gray-400 flex justify-center items-center gap-2">

            © {new Date().getFullYear()} Naledi Mamatela

            <FaHeart className="text-pink-500" />

            All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;