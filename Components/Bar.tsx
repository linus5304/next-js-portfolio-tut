import React from "react"
import { Skill } from "../types"
import {motion} from 'framer-motion'

interface BarProps {
  data: Skill
}

export const Bar: React.FC<BarProps> = ({ data: { Icon, level, name } }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type:"spring",
        damping:10,
        stiffness: 100
      },
    },
  }
  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-dark-300 rounded-full">
      <motion.div
        className="px-4 py-1 flex flex-grow-0 items-center rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  )
}
