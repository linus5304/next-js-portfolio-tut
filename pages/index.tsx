import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { services } from "../data"
import { Service } from "../types"
import { ServiceCard } from "../Components/ServiceCard"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from "../animations"

interface HomeProps {
  services: Service[]
}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum
        molestiae nulla aut at quod explicabo ipsum! Molestias sint quam numquam
        praesentium cumque, expedita nostrum voluptas, explicabo deleniti in
        mollitia excepturi blanditiis quidem minus! Nesciunt labore, illo quod
        sint exercitationem dolorem distinctio nobis eveniet?
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map(s => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={s.title}
            >
              <ServiceCard service={s} key={s.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
