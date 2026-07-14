import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaPhp,
  FaDatabase,
  FaMicrosoft,
  FaGoogle,
  FaTools,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress",
    },
    {
      icon: <FaPhp />,
      title: "PHP",
    },
    {
      icon: <FaDatabase />,
      title: "MySQL",
    },
    {
      icon: <FaMicrosoft />,
      title: "Microsoft Azure",
    },
    {
      icon: <FaGoogle />,
      title: "Google Ads",
    },
    {
      icon: <FaTools />,
      title: "IT Support",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-pink-400 mb-6"
        >
          Technical Skills
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
          These are some of the technologies, platforms and tools I have
          worked with throughout my academic journey and professional
          experience.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >

              <div className="text-6xl text-pink-400 flex justify-center mb-6">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;