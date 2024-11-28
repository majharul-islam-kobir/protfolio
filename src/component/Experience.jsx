import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// অ্যানিমেশন কনফিগারেশন
const container = (direction = -100) => ({
  hidden: { x: direction, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
});

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mx-3">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl text-orange-900"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={container(index % 2 === 0 ? -100 : 100)} // বাম/ডান নির্ধারণ
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // স্ক্রল করে দেখা যাবে
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-neutral-200">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="text-neutral-400 mb-2">{experience.description}</p>
              <div className="flex flex-wrap gap-3 justify-start">
                {experience.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-shrink-0">
                    <p className="px-2 py-1 bg-neutral-900 rounded-md text-purple-900">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
