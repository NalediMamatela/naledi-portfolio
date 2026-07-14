import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaCloud,
  FaBullhorn,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-pink-400 mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 max-w-4xl mx-auto text-lg leading-8 mb-16"
        >
          I am an enthusiastic Information Technology graduate who enjoys
          creating modern digital solutions, supporting users, and helping
          businesses grow through technology. My experience includes web
          development, IT support, Microsoft Azure cloud technologies,
          WordPress, and Google Ads campaign management. I enjoy learning
          new technologies and continuously improving my technical and
          professional skills.
        </motion.p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-pink-500/30 transition duration-300"
          >
            <FaUserGraduate className="text-5xl text-pink-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              IT Graduate
            </h3>

            <p className="text-gray-400 leading-7">
              Strong academic foundation in Information Technology,
              software development, databases, networking and
              cloud computing.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-pink-500/30 transition duration-300"
          >
            <FaLaptopCode className="text-5xl text-pink-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Web Development
            </h3>

            <p className="text-gray-400 leading-7">
              Experienced in building responsive websites using
              HTML, CSS, JavaScript, WordPress and modern web
              technologies.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-pink-500/30 transition duration-300"
          >
            <FaCloud className="text-5xl text-pink-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Microsoft Azure
            </h3>

            <p className="text-gray-400 leading-7">
              Microsoft Azure certified with knowledge of cloud
              services, cloud fundamentals and modern IT
              infrastructure.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-pink-500/30 transition duration-300"
          >
            <FaBullhorn className="text-5xl text-pink-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Google Ads
            </h3>

            <p className="text-gray-400 leading-7">
              Experience creating and managing Google Ads campaigns
              to improve online visibility, generate leads and help
              businesses reach their marketing goals.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;