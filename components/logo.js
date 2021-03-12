import styled, { css } from 'styled-components'
import { sizes } from '../utils/sizes'

const logo = (props) => {
  return (
    <LogoSquare animated = {props.animated} height={props.height} shadows = {props.shadows}>
      <svg className="logoKB" viewBox="0 0 127 87">
        <g transform="translate(-11.759317,100.76049)" id="layer1">
          <path
            d="m 14.319713,-15.449819 4.654738,0.0174 v -67.098377 h -5.759926 v -16.77449 h 21.057446 v 83.872827 h 76.567179 c 32.41762,-0.76888 37.44417,-45.519771 0,-45.541941 21.47293,-0.74212 20.58812,-38.179319 0,-38.330886 H 88.195585 v 75.903047 H 65.249332 L 41.920755,-60.9744 65.249332,-99.305286 H 80.164425 L 57.218169,-60.9744 72.560293,-35.989639"
            style={{ fill: 'none', stroke: 'white', strokeWidth: 5, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: props.animated ? '688.246 20' : 0, strokeOpacity: 1 }}
          />
        </g>
      </svg>
      <div className='whiteSquare' />
    </LogoSquare>
  );
}

export const LogoSquare = styled.div`
  height:${props => props.height};
  width:${props => props.height};
  background: linear-gradient(180deg, #344ED8 0%, #1F318E 100%);
  filter: ${props => props.shadows?'var(--softShadow)' :'none'};
  @media ${sizes.phoneMid}{
    height:calc(${props => props.height} / 1.25);
    width:calc(${props => props.height} / 1.25);
  }
  position: relative;
  & .whiteSquare{
    position: absolute;
    left: 0;
    top: 0;
    width:12%;
    height:12%;
    background:white;
  }
  & .logoKB{
    grid-area: 1 / 1 / span 1 / span 1;
    padding:calc(${props => props.height}/10);
    height:100%;
    width:100%;
    & path {
      stroke-dashoffset: ${props => props.animated ?688.246 :0};
      animation: ${props => props.animated?'pathAnim 6s linear alternate infinite':'none'}; 
    }
  }
`

export default logo;
