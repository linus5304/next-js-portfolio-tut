import React, { useState } from "react"
import { IProject } from "../types"
import Image from "next/image"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animations"

interface ProjectCardProps {
  project: IProject
  showDetail: number | null
  setShowDetail: Function
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    id,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
    name,
  },
  setShowDetail,
  showDetail,
}) => {
  //   const [showDetail, setShowDetail] = useState(false)
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        width={300}
        height={150}
        onClick={() => setShowDetail(id)}
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 w-full h-auto gap-x-12 bg-gray-100 text-black dark:text-white dark:bg-dark-100 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                width={300}
                height={150}
                onClick={() => setShowDetail(true)}
                layout="responsive"
              />
            </motion.div>

            <div className="flex justify-center my-4 space-x-3">
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                href={github_url}
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                href={deployed_url}
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider p-2"
            >
              {key_techs.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.button
            variants={fadeInUp}
            onClick={() => setShowDetail(null)}
            className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </motion.button>
        </div>
      )}
    </div>
  )
}
