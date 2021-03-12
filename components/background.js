import styled, {css} from 'styled-components'
const background = () => {
  return (
    <DottedBackground />
  );
}
const DottedBackground = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: var(--bgColor);
    background-image: var(--bgImage);
    z-index: -1;
    transition: all 0.2s ease-out;
  `
export default background;
