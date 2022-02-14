import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

interface NavBarProps {}

const NavItem: React.FC<{
  activeItem: string
  setActiveItem: Function
  name: string
  route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    <>
      {activeItem !== name && (
        <Link href={route}>
          <a>
            <span onClick={() => setActiveItem(name)} className="hover:text-green">{name}</span>{" "}
          </a>
        </Link>
      )}
    </>
  )
}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [activeItem, setActiveItem] = useState<string>("")

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === "/") setActiveItem("About")
    if (pathname === "/projects") setActiveItem("Projects")
    if (pathname === "/resume") setActiveItem("Resume")
  }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green text-xl border-b-4 border-green md:text-2xl ">{activeItem}</span>
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          name="About"
          route="/"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Projects"
          route="/projects"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Resume"
          route="/resume"
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  )
}
