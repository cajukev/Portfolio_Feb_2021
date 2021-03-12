import 'react-app-polyfill/ie11';
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Banner from '../banner'
import StartButtons from '../startButtons'
import StartText from '../startText'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Index(props) {
  const router = useRouter()
  // State influences the StartText text and the clickability of StartButtons
  const [state, setstate] = useState([0, 0]);
  const buttonClick = (button) => {
    var newState;
    if (button == 1) {//Read More
      switch (state[0]) {
        case 0:
          setstate([1, 0])
          break;
        case 1:
          //Advance state 1, up to a max
          newState = Math.min(state[1] + 1, 2)
          setstate([1, newState])
          break;
        case 2:
        case 3:
          //Change Page
          router.replace('/home'+router.asPath.slice(-3), undefined, {scroll: false}).then(() => {
            setTimeout(function(){window.scrollTo(0,0)}, 200)
          })
          break;
      }
    } else {//Confetti
      switch (state[0]) {
        case 0:
          setstate([2, 0])
          break;
        case 1:
          setstate([3, 0])
          break;
        case 2:
          newState = Math.min(state[1] + 1, 2)
          setstate([2, newState])
          break;
        case 3:
          newState = Math.min(state[1] + 1, 2)
          setstate([3, newState])
          break;
      }
    }
  }
  return (
    <> 

      <IndexContainer >
        <motion.div layoutId={'banner'} variants={item} initial="hidden" animate={"show"} exit={props.nav ? "none":"exit"}>
          <Banner lang={props.lang}/>
        </motion.div>

        <motion.div
          initial={{opacity:0}} variants={item} initial="hidden" animate={"show"} exit={"exit"}
        >
          <StartButtons space="3rem" state={state} buttonClick={buttonClick} navTrigger={props.navTrigger}/>
          <StartText space="2rem" state={state} />
        </motion.div>
      </IndexContainer>
      <motion.div initial={{opacity:0}} variants={item} initial="hidden" animate={"show"} exit={"exit"}>
      <Hint>Hint: there is a total of 25 different phrases that appear under the buttons. 
        You'll have to refresh the page to see them all!</Hint>
      </motion.div>
      
    </>
  )
}

const IndexContainer = styled.div`
  position:relative;
  top:45vh;
  transform:translateY(-50%);
`
const Hint = styled.p`
  position:absolute;
  bottom: 0;
  transform:translateY(100%);
  width:100%;
  text-align:center;
`
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {duration: 0.1, delay: 0.25}
  },
  exit: {
    opacity: 0,
    transition: {duration: 0.2}
  }
}