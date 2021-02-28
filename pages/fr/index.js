import Head from 'next/head'
import styled, { css } from 'styled-components'
import Banner from '../../components/banner'
import StartButtons from '../../components/startButtons'
import StartText from '../../components/startText'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
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

          router.push({pathname:router.pathname+'/home'})
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
        <motion.div layoutId='banner'>
          <Banner />
        </motion.div>

        <motion.div
          initial={{opacity:0}} animate={{opacity:1}} exit={{ opacity: 0 }} transition={{duration:0.2}}
        >
          <StartButtons space="3rem" state={state} buttonClick={buttonClick} />
          <StartText space="2rem" state={state} />
        </motion.div>
      </IndexContainer>
      <Hint>Hint: there is a total of 25 different phrases that appear under the buttons. 
        You'll have to refresh the page to see them all!</Hint>
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