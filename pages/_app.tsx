import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Sidebar } from "../Components/Sidebar"
import { NavBar } from "../Components/NavBar"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 px-5 gap-6 my-14 lg:px-48 sm:px-20 md:px-32">
        <div className="lg:col-span-3 bg-white dark:bg-dark-500 rounded-2xl col-span-12 p-4 text-center shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col overflow-hidden dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
