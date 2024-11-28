import { BsFiletypeScss } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Technology() {
  return (
    <div className="my-6">
      <h2 className="text-4xl md:text-6xl text-orange-300 mx-3 mb-10 text-center">
        Technology
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { Icon: RiReactjsLine },
            { Icon: TbBrandNextjs },
            { Icon: IoLogoHtml5 },
            { Icon: FaCss3Alt },
            { Icon: FaJsSquare },
            { Icon: SiTailwindcss },
            { Icon: FaBootstrap },
            { Icon: BsFiletypeScss },
            { Icon: DiFirebase },
          ].map(({ Icon }, index) => (
            <motion.div
              key={index}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="border-4 border-neutral-800 p-4 rounded-2xl"
            >
              <Icon className="text-7xl text-cyan-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
