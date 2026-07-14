import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({
  image,
  title,
  description,
  technologies,
  website,
  github,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Project Image */}

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover hover:scale-110 transition duration-700"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-pink-400">
          {title}
        </h3>

        <p className="text-gray-300 mt-4 leading-7">
          {description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-6">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8 flex-wrap">

          {website && (

            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-lg transition"
            >
              <FaExternalLinkAlt />
              Live Site
            </a>

          )}

          {github && (

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-pink-400 px-5 py-3 rounded-lg hover:bg-pink-500 transition"
            >
              <FaGithub />
              GitHub
            </a>

          )}

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;