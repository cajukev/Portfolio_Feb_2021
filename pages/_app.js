import '../styles/globals.scss'
import styled, { css } from 'styled-components'
import Background from '../components/background'
import Overlay from '../components/overlay/overlay'
import { OverPhone } from '../utils/queryComponents'
import { barHeight } from '../components/overlay/actionBar'
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
    var initialTheme = true
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      initialTheme = false
    }
    if(window.localStorage.getItem('theme')!=null){
      initialTheme = window.localStorage.getItem('theme') == 'true'
    }
    window.localStorage.setItem('theme',initialTheme)
    settheme(initialTheme)
  }, []);

  //Using Nav vs Using Buttons
  const [nav, setNav] = useState(true);
  const navTrigger = (val) => {
    setNav(val);
    console.log(val)
  }
  return <>
    
    <Background />
    <OverPhone >
      <div style = {{ height: barHeight }}/>
    </OverPhone>
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter >
        <Component key={router.route} {...pageProps} nav={nav} navTrigger={navTrigger}/>
      </AnimatePresence>
    </AnimateSharedLayout>
    <Overlay theme={theme} switchTheme={switchTheme} navTrigger={navTrigger}/>
  </>
}
export default MyApp
