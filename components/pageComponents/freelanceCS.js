import styled, { css } from 'styled-components'
import Banner from '../banner'
import { motion } from "framer-motion";
const freelanceCS = () => {
  return (
    <>
      <div className="spaceM" />
      <motion.div layoutId='banner' animate={{ opacity: 0 }}>
        <Banner />
      </motion.div>
    </>
  );
}
export default freelanceCS;
