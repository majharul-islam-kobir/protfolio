import image from "../assets/images/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

// অ্যানিমেশন ভ্যারিয়েন্টস
const container = (direction = -100) => ({
  hidden: { x: direction, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

function HeroTwo() {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        variants={container(-100)} // বাম পাশ থেকে আসবে
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-6xl text-red-300 text-center mx-3 my-10"
      >
        About Me
      </motion.h2>

      <div className="md:grid md:grid-cols-2 gap-10">
        {/* ইমেজ সেকশন */}
        <motion.div
          variants={container(100)} // ডান পাশ থেকে আসবে
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center items-center"
        >
          <img src={image} className="rounded-lg shadow-lg" alt="About image" />
        </motion.div>

        {/* টেক্সট সেকশন */}
        <motion.div
          variants={container(-100)} // বাম পাশ থেকে আসবে
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-16 md:mt-0"
        >
          <p className="text-start text-white text-lg md:text-xl mx-3">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroTwo;
