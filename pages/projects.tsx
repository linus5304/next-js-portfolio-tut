import { motion } from "framer-motion"
import React, { useState } from "react"
import { fadeInUp, routeAnimation, stagger } from "../animations"
import { ProjectCard } from "../Components/ProjectCard"
import { ProjectsNavbar } from "../Components/ProjectsNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../types"

interface projectsProps {}

export const Projects: React.FC<projectsProps> = ({}) => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState("all")

  const [showDetail, setShowDetail] = useState<number | null>(null)

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData)
      setActive(category)
      return
    }

    const newProjects = projectsData.filter(project =>
      project.category.includes(category)
    )
    setProjects(newProjects)
    setActive(category)
  }
  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectsNavbar
        handlerFilterCategory={handleFilterCategory}
        active={active}
      />

      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative"
        initial="initial"
        variants={stagger}
        animate="animate"
      >
        {projects.map(project => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg"
            key={project.name}
          >
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
