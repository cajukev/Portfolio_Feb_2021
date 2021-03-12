import styled, { css } from 'styled-components'
import Banner from '../banner'
import { motion } from "framer-motion";
const home = (props) => {
  return (
    <>
      <div className="spaceM" />
      <motion.div layoutId={'banner'} variants={item} initial="hidden" animate={"show"} exit={props.nav ? "none":"exit"} >
        <Banner />
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="show" exit="exit"  custom={1}>
        1
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="show" exit="exit"  custom={2}>
        2
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="show" exit="exit" custom={3} style={{height:'200vh'}}>
        3
      </motion.div>

    </>
  );
}
// Framer motion variants
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
export default home;
