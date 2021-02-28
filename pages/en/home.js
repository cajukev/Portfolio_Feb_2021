import styled, { css } from 'styled-components'
import Banner from '../../components/banner'
import { motion } from "framer-motion";
const home = () => {
  return (
    <>
      <div className="spaceM"/>
      <motion.div layoutId='banner'>
        <Banner />
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="show" exit="exit" custom={1}>
        1
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="show" exit="exit" custom={2}>
        2
      </motion.div>
      <motion.div variants={item} initial="hidden" animate="show" exit="exit" custom={3}>
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
  show: i => ({
    opacity: 1,
    transition: {duration: 2, delay: i * 0.3}
  }),
  exit: {
    opacity: 0,
    transition: {duration: 0.2}
  }
}
export default home;
