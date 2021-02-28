import styled, { css } from 'styled-components'

const lineSpot = () => {
  return (
    <LineSpot />
  );
}
export const LineSpot = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  background: var(--lineSpot);
  z-index:-1;
  transform:scaleY(2);
  pointer-events:none;
`
export default lineSpot;
