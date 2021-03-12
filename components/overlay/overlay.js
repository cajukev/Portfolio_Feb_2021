import styled, { css } from 'styled-components'
import { PhoneAll, OverPhone } from '../../utils/queryComponents'
import Toes from '../overlay/toes'
import ActionBar from '../overlay/actionBar'

const overlay = (props) => {
  return (
    <OverlayContainer>
      <PhoneAll>
        <Toes {...props}/>
      </PhoneAll>
      <OverPhone>
        <ActionBar {...props}/>
      </OverPhone>
    </OverlayContainer>
  );
}

const OverlayContainer = styled.div`
  z-index:99;
`

export default overlay;
