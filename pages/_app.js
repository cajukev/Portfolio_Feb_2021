import '../styles/globals.scss'
import Background from '../components/background'
import Toes from '../components/toes'
import { useState, useEffect } from 'react'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // Disable focus styles before keyboard navigation
  useEffect(() => {
    document.querySelector('body').classList.add('no-focus-outline')
    document.querySelector('body').addEventListener("keydown", tabListener)
  }, []);
  // Enable focus styles after keyboard navigation
  const tabListener = (e) => {
    console.log(e.key)
    if (e.key == "Tab") {
      document.querySelector('body').classList.remove('no-focus-outline')
      document.querySelector('body').removeEventListener("keydown", tabListener)
    }
  }
  // Theme controller
  const [theme, settheme] = useState(true);
  const switchTheme = () => {
    window.localStorage.setItem('theme', !theme)
    settheme(!theme)
  }
  //Sets theme values
  useEffect(() => {
    const root = document.documentElement
    if (!theme) {//Dark theme
      root.classList.add('dark')
      root.classList.remove('light')
    } else { //Light theme
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [theme]);
  //Detect preferred color scheme
  useEffect(() => {
    settheme(window.localStorage.getItem('theme') == "true")
  }, []);
  //Post transition scroll
  return <>
    <Toes theme={theme} switchTheme={switchTheme}/>
    <Background />
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter >
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </AnimateSharedLayout>
  </>
}

export default MyApp
