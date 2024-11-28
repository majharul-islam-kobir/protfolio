import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// অ্যানিমেশন ভ্যারিয়েন্টস
const imageAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const textAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl text-orange-400"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* ইমেজ বাম পাশ থেকে আসবে */}
            <motion.div
              variants={imageAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full my-6 lg:w-1/4 flex justify-center md:justify-start items-center"
            >
              <img src={Project.image} width={150} height={150} alt="project image" />
            </motion.div>
            {/* টেক্সট ডান পাশ থেকে আসবে */}
            <motion.div
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-neutral-200 flex justify-center md:justify-start items-center">
                {Project.title}
              </h6>
              <p className="text-neutral-400 mb-2">{Project.description}</p>
              <div className="flex flex-wrap gap-3 justify-start">
                {Project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-shrink-0">
                    <p className="px-2 py-1 bg-neutral-900 rounded-md text-purple-900">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
