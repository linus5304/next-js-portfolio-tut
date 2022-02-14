import { motion } from "framer-motion"
import React from "react"
import { Bar } from "../Components/Bar"
import { languages, tools } from "../data"
import {fadeInUp, routeAnimation} from '../animations'

interface resumeProps {}

const resume: React.FC<resumeProps> = ({}) => {
  
  return (
    <motion.div className="px-6 py-2" variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    >
      {/* education and experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">
              African Institut of computer science
            </p>
            <p className="my-3">
              I am currently pursuring B.Tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">
              African Institut of computer science
            </p>
            <p className="my-3">I am a a beast</p>
          </div>
        </motion.div>
      </div>

      {/* Language and experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map(language => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map(tool => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default resume
