import { motion } from "framer-motion"
import React from "react"
import { stagger } from "../animations"
import { Service } from "../types"

interface ServiceCardProps {
  service: Service
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service: { Icon, about, title },
}) => {
  const createMockup = () => {
    return {
      __html: about,
    }
  }
  return (
    <div className="p-2 flex items-center space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMockup()} />
      </div>
    </div>
  )
}
