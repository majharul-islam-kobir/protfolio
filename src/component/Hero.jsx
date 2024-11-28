import { HERO_CONTENT } from "../constants";
import image from "../assets/images/kevinRushProfile.jpg";
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

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 md:grid md:grid-cols-2 gap-5">
      {/* টেক্সট সেকশন */}
      <div className="mt-16">
        <motion.h1
          variants={container(-100)} // বাম পাশ থেকে আসবে
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // স্ক্রল ট্রিগার
          className="text-6xl text-orange-200 md:text-start text-center mx-3"
        >
          Majharul Islam
        </motion.h1>
        <motion.h2
          variants={container(-100)} // বাম পাশ থেকে আসবে
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-orange-500 mt-12 md:text-start text-center mx-3"
        >
          Front-End Developer
        </motion.h2>
        <motion.p
          variants={container(-100)} // বাম পাশ থেকে আসবে
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          className="text-start mt-5 text-white text-md mx-3"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>

      {/* ইমেজ সেকশন */}
      <motion.div
        variants={container(100)} // ডান পাশ থেকে আসবে
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center items-center mt-16"
      >
        <img src={image} className="rounded-md" alt="banner image" />
      </motion.div>
    </div>
  );
}

export default Hero;
