import styled, { css } from 'styled-components'
import { sizes } from '../utils/sizes'
import { useState, useEffect } from 'react'

const startButtons = (props) => {
  const [launches, setLaunches] = useState(0);
  useEffect(() => {
    if (launches == 0) { }
    if (launches == 1) {
      const confetti = require('canvas-confetti');
      var myCanvas = document.createElement('canvas');
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
      myCanvas.style.position = "fixed"
      myCanvas.style.left = "0"
      myCanvas.style.top = "0"
      myCanvas.style.pointerEvents = "none"
      document.querySelector("body").appendChild(myCanvas);
      var myConfetti = confetti.create(myCanvas, {
        resize: true,
      });
    }
    if (launches >= 1) {
      var myCanvas = document.querySelector('canvas');
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
      const confetti = require('canvas-confetti');
      var myCanvas = document.querySelector('canvas');
      var myConfetti = confetti.create(myCanvas);
      const size = window.innerHeight
      const vel0 = size / 15;
      const amount = Math.min(size / 5, 300);
      const scale = size / 1000 - 0.25;
      // LEFT SIDE
      myConfetti({
        particleCount: amount,
        ticks: 120,
        origin: { x: -0.1, y: 0.9 },
        angle: 45,
        spread: 90,
        startVelocity: vel0 * 1.0,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
      myConfetti({
        particleCount: amount,
        ticks: 105,
        origin: { x: -0.1, y: 0.9 },
        angle: 45,
        spread: 90,
        startVelocity: vel0 * 1.1,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
      myConfetti({
        particleCount: amount,
        ticks: 90,
        origin: { x: -0.1, y: 0.9 },
        angle: 45,
        spread: 90,
        startVelocity: vel0 * 1.2,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
      myConfetti({
        particleCount: amount / 2,
        ticks: 75,
        origin: { x: -0.1, y: 0.9 },
        angle: 45,
        spread: 90,
        startVelocity: vel0 * 1.3,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
      // RIGHT SIDE
      myConfetti({
        particleCount: amount,
        ticks: 120,
        origin: { x: 1.1, y: 0.9 },
        angle: 135,
        spread: 90,
        startVelocity: vel0 * 1.0,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
      myConfetti({
        particleCount: amount,
        ticks: 105,
        origin: { x: 1.1, y: 0.9 },
        angle: 135,
        spread: 90,
        startVelocity: vel0 * 1.1,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
      myConfetti({
        particleCount: amount,
        ticks: 90,
        origin: { x: 1.1, y: 0.9 },
        angle: 135,
        spread: 90,
        startVelocity: vel0 * 1.2,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
      myConfetti({
        particleCount: amount / 2,
        ticks: 75,
        origin: { x: 1.1, y: 0.9 },
        angle: 135,
        spread: 90,
        startVelocity: vel0 * 1.3,
        colors: ['#344ED8', '#EEA312'],
        scalar: scale
      });
    }

  }, [launches]);

  const button1 = () => {
    props.buttonClick(1)
  }
  const button2 = () => {
    setLaunches(launches + 1)
    props.buttonClick(2)
  }
  return (
    <ButtonContainer space={props.space}>
      <Button onClick={button1}>
        Learn more about me
      </Button>
      <ButtonSeparator> or </ButtonSeparator>
      <Button yellow onClick={button2}>
        Launch confetti!
      </Button>
    </ButtonContainer>
  );
}
const ButtonContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:100%;
  justify-content:center;
  margin-top:${props => props.space};
  @media ${sizes.phoneAll}{
    flex-direction:column;
  }
`

const Button = styled.button`
  font-size:1rem;
  filter:var(--softShadow);
  padding:0.5rem 1rem;
  font-family:var(--bodyFont);
  border:none;
  // Base (Blue)
  background:linear-gradient(180deg, #344ED8 0%, #1F318E 100%);
  color:white;
  &:hover{
    filter:brightness(1.2) var(--softShadow);
    cursor: pointer;
  }
  // Variant Yellow
  ${props =>
    props.yellow &&
    css`
      background: linear-gradient(180deg, #FFCA63 0%, #EEA312 100%);
      color:black;
      font-weight:700;
      &:hover{
        filter:brightness(1.1) var(--softShadow);
      }
    `
  }
`

const ButtonSeparator = styled.p`
  font-family:var(--bodyFont);
  font-weight:700;
  padding: 0 1rem;
  color:var(--fontColor);
  @media ${sizes.phoneAll}{
    padding: 0.5rem 0rem;
  }
`

export default startButtons;
