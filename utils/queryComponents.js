import { sizes } from '../utils/sizes'
import styled, { css } from 'styled-components'

export const Mobile = styled.div`
  @media${sizes.landscape}{
    display:none;
  }
`
export const Landscape = styled.div`
  @media${sizes.mobile}{
    display:none;
  }
`

export const PhoneAll = styled.div`
  @media${sizes.overPhone}{
    display:none;
  }
`

export const OverPhone = styled.div`
  @media${sizes.phoneAll}{
    display:none;
  }
`