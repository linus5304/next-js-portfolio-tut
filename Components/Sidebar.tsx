import React from "react"
import {
  AiFillGithub,
  AiFillLike,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { GiTie } from "react-icons/gi"

import { useTheme } from "next-themes"
import Image from "next/image"
import { BsPerson } from "react-icons/bs"
interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div>
      {/* <Image
        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="user avatar"
        className=""
        width={128}
        height={128}
        layout="intrinsic"
      /> */}
      <BsPerson className="rounded-full mx-auto text-9xl"/>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Linus</span> Bayere
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">web Deeloper</p>
      <a
        href=""
        download="name"
        className="flex items-center justify-center dark:bg-dark-200 px-2 py-1 my-3 bg-gray-200 rounded-full"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* social icons */}
      <div className="flex justify-around my-5 w-9/12 mx-auto text-green md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}

      <div
        className="py-5 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Yaounde, Cameroon</span>
        </div>
        <p className="my-2">linus@gmail.com</p>
        <p className="my-2">+237 680 55 38 19</p>
      </div>
      {/* Email button */}
      <button
        className="bg-gradient-to-r from-green to-blue-400 text-white py-2 rounded-full w-9/12 my-2 focus:outline-none"
        onClick={() => window.open("mailto: linusbayere@gmail.com")}
      >
        Email me
      </button>
      <button onClick={changeTheme} className="bg-gradient-to-r from-green to-blue-400 text-white py-2 rounded-full w-9/12 my-2">
        Toggle theme
      </button>
    </div>
  )
}
