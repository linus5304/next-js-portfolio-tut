import React from "react"
import { Category } from "../types"

interface ProjectsNavbarProps {
  handlerFilterCategory: Function
  active: string
}

export const NavItem: React.FC<{
  value: Category | "all"
  handlerFilterCategory: Function
  active: string
}> = ({ value, handlerFilterCategory, active }) => {
 
  return (
    <li className={`cursor-pointer hover:text-green capitalize ${active === value ? 'text-green' : ""}`} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

export const ProjectsNavbar: React.FC<ProjectsNavbarProps> = ({ ...props }) => {
  return (
    <div className="flex px-3 py-2 space-x-2 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="node" {...props} />
    </div>
  )
}
