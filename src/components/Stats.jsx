import { motion } from "framer-motion";

function Stats() {

  const stats = [

    {
      number: "3+",
      title: "Microsoft Certifications",
    },

    {
      number: "15+",
      title: "Technical Skills",
    },

    {
      number: "100%",
      title: "Commitment",
    },

    {
      number: "24/7",
      title: "Problem Solving",
    },

  ];

  return (

    <section className="py-20 bg-slate-900">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-8">

        {stats.map((item) => (

          <motion.div

            key={item.title}

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="text-center bg-white/5 rounded-3xl p-8 border border-pink-500/20"

          >

            <h2 className="text-5xl font-bold text-pink-400">

              {item.number}

            </h2>

            <p className="text-gray-300 mt-4">

              {item.title}

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Stats;