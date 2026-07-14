import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
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
          My Projects
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
          Below are some of the websites and digital solutions I have
          contributed to through web development, WordPress, IT support
          and digital marketing.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          <ProjectCard
            image={`${import.meta.env.BASE_URL}projects/swangs.png`}
            title="Swangs Safaris"
            description="A professional tourism website developed to showcase Johannesburg tours, safari packages and travel experiences with a responsive and user-friendly design."
            technologies={[
              "WordPress",
              "HTML",
              "CSS",
              "JavaScript",
              "Google Ads",
            ]}
            website="https://swangssafaris.com/tours-in-johannesburg/"
          />

          <ProjectCard
            image={`${import.meta.env.BASE_URL}projects/turnskill.png`}
            title="Turn-Skill Engineering"
            description="A corporate engineering website developed for a precision engineering company to showcase machining services, manufacturing capabilities and company information."
            technologies={[
              "WordPress",
              "PHP",
              "CSS",
              "SEO",
            ]}
            website="https://turnskilleng.co.za/"
          />

          <ProjectCard
            image={`${import.meta.env.BASE_URL}projects/googleads.png`}
            title="Google Ads Campaign Management"
            description="Created and managed Google Ads campaigns to increase online visibility, improve search rankings, generate leads and optimize digital marketing performance for clients."
            technologies={[
              "Google Ads",
              "Google Analytics",
              "SEO",
              "Marketing",
            ]}
          />

        </div>

      </div>
    </section>
  );
}

export default Projects;