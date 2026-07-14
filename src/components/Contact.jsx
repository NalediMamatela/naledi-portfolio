import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_dubu96a",
        "template_4esvr4a",
        form.current,
        "D0SNPsYPQRzJ1PxyB"
      )
      .then(() => {
        setMessage("✅ Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch(() => {
        setMessage("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-5xl font-bold text-center text-pink-400 mb-6"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
          I'd love to hear from you. Whether you have a job opportunity,
          freelance project or simply want to connect, feel free to reach out.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="bg-slate-800 rounded-2xl p-10"
          >

            <h3 className="text-3xl font-bold text-pink-400 mb-8">
              Let's Connect
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="text-pink-400 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">
                    Naledibokamoso04@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="text-pink-400 text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">
                    063 566 1028
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="text-pink-400 text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">
                    South Africa
                  </p>
                </div>

              </div>

            </div>

            <div className="flex gap-5 mt-12">

              <a
                href="https://www.linkedin.com/in/naledi-mamatela-8278b4270"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-pink-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/NalediMamatela"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-pink-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="bg-slate-800 rounded-2xl p-10 space-y-6"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl flex items-center gap-3 transition"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p className="text-pink-300 mt-4">
                {message}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;