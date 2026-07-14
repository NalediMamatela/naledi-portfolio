import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experience = [
    {
      title: "IT Graduate",
      company: "Information Technology",
      period: "2024 – Present",
      description:
        "Passionate Information Technology graduate with experience in web development, Microsoft Azure, IT support, WordPress, and Google Ads campaign management. Continuously learning and applying modern technologies to solve real-world business challenges.",
    },
    {
      title: "Web Development",
      company: "Freelance Projects",
      period: "2024 – Present",
      description:
        "Designed and developed responsive websites using HTML, CSS, JavaScript, WordPress and PHP. Focused on user experience, performance optimisation and modern web design.",
    },
    {
      title: "Google Ads Specialist",
      company: "Digital Marketing",
      period: "2024 – Present",
      description:
        "Created and managed Google Ads campaigns, monitored campaign performance, improved online visibility, generated leads and assisted businesses in achieving their marketing goals.",
    },
    {
      title: "Microsoft Azure",
      company: "Cloud Technologies",
      period: "Certified",
      description:
        "Certified in Microsoft Azure fundamentals with knowledge of cloud services, cloud computing concepts, virtual machines, networking and security fundamentals.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-pink-400 mb-6"
        >
          Experience
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
          My journey in Information Technology has allowed me to gain
          experience in software development, web technologies, cloud
          computing and digital marketing.
        </p>

        <div className="relative border-l-4 border-pink-500 ml-5">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="mb-12 ml-8 relative"
            >

              <div className="absolute -left-[52px] top-2 w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/40">
                <FaBriefcase />
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition duration-300">

                <h3 className="text-2xl font-bold text-pink-400">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2 font-medium">
                  {item.company}
                </p>

                <span className="inline-block mt-3 bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
                  {item.period}
                </span>

                <p className="text-gray-400 leading-8 mt-6">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;