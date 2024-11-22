import { BiLogoGit, BiLogoJavascript,
  BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql,
  BiLogoPython, BiLogoReact, BiLogoTypescript 
} from "react-icons/bi";
import { motion } from "motion/react";
import { FaSalesforce } from "react-icons/fa";

const Tech = () => {
  const variants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0}
  }

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col
    items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}
        className="text-4xl font-light text-white md:text-5xl">
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center
      gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoReact className="cursor-pointer text-[80px] text-sky-400
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>React
          </div>
          
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoNodejs className="cursor-pointer text-[80px] text-green-400
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>Node.js
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-400
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>JavaScript
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoGit className="cursor-pointer text-[80px] text-orange-400
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>Git
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoTypescript className="cursor-pointer text-[80px] text-blue-500
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>TypeScript
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoPython className="cursor-pointer text-[80px] text-blue-400
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>Python
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoPostgresql className="cursor-pointer text-[80px] text-blue-600
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>PostgreSQL
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <BiLogoMongodb className="cursor-pointer text-[80px] text-green-600
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>MongoDB
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
        >
          <div className="text-white text-center">
            <FaSalesforce className="cursor-pointer text-[80px] text-sky-500
            transition-all duration-300 hover:-translate-y-5 sm:text-[60px]
            md:text-[80px]"/>Salesforce
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Tech;