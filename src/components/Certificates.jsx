import { motion } from "framer-motion";
import {
  FaCertificate,
  FaMicrosoft,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Microsoft Azure Fundamentals",
      code: "AZ-900",
      icon: <FaCloud />,
      description:
        "Demonstrates knowledge of cloud concepts, Azure services, security, pricing and governance.",
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      code: "AI-900",
      icon: <FaRobot />,
      description:
        "Validates understanding of Artificial Intelligence, Machine Learning and Azure AI services.",
    },
    {
      title: "Microsoft Certified",
      code: "Professional Development",
      icon: <FaMicrosoft />,
      description:
        "Continuous learning through Microsoft technologies and cloud-based solutions.",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold">

            My{" "}

            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>

          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-300 mt-8 max-w-3xl mx-auto leading-8">
            Professional certifications that demonstrate my commitment
            to continuous learning and staying up to date with modern
            cloud and software technologies.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.code}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-white/5 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 hover:border-pink-400 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(236,72,153,.25)] transition duration-500"
            >

              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-4xl mb-8">

                {certificate.icon}

              </div>

              <div className="flex items-center gap-2 mb-4">

                <FaCertificate className="text-pink-400" />

                <span className="text-pink-300 font-semibold">

                  {certificate.code}

                </span>

              </div>

              <h3 className="text-2xl font-bold mb-5">

                {certificate.title}

              </h3>

              <p className="text-gray-300 leading-8">

                {certificate.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;