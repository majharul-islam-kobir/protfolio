import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const container = (direction = 0) => ({
  hidden: { x: direction, y: direction, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.6 } },
});

function Contact() {
  return (
    <div>
      <motion.h2
        variants={container(-100)} 
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }} 
        className="text-center text-5xl my-6 font-semibold text-amber-300"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        variants={container(100)}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-xl my-2 text-neutral-500"
      >
        {CONTACT.address}
      </motion.p>

      <motion.p
        variants={container(-100)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        className="text-center text-xl my-2 text-neutral-500"
      >
        {CONTACT.phoneNo}
      </motion.p>

      <motion.p
        variants={container(100)} 
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }} 
        className="text-center text-xl pb-8 text-neutral-500 underline"
      >
        {CONTACT.email}
      </motion.p>
    </div>
  );
}

export default Contact;
