import styled, { css } from 'styled-components'
import { sizes } from '../utils/sizes'
import LineSpot from '../components/lineSpot'
import { banner_ } from '../content'
import { useRouter } from 'next/router'

const banner = (props) => {
  const router = useRouter()
  return (
    <BannerContainer>
      <LineSpot />
      <LogoName className='contained'>
        <LogoSquare>
          <LogoKB viewBox="0 0 127 87">
            <g transform="translate(-11.759317,100.76049)" id="layer1">
              <path
                d="m 14.319713,-15.449819 4.654738,0.0174 v -67.098377 h -5.759926 v -16.77449 h 21.057446 v 83.872827 h 76.567179 c 32.41762,-0.76888 37.44417,-45.519771 0,-45.541941 21.47293,-0.74212 20.58812,-38.179319 0,-38.330886 H 88.195585 v 75.903047 H 65.249332 L 41.920755,-60.9744 65.249332,-99.305286 H 80.164425 L 57.218169,-60.9744 72.560293,-35.989639"
                style={{ fill: 'none', stroke: 'white', strokeWidth: 5, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: '688.246 20', strokeOpacity: 1 }}
              />
            </g>
          </LogoKB>
          <div className='whiteSquare' />
        </LogoSquare>
        <NameTitle>
          <p className="name">Kevin Brousseau</p>
          <p className="title">{router.asPath.slice(1, 3) == 'en' ? banner_.title.en : banner_.title.fr  }</p>
        </NameTitle>
        <Bracket viewBox="0 0 28 194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.2308 10.0518H0V0H28V194H0V183.948H17.2308V10.0518Z" fill="#344ED8" />
          <path fillRule="evenodd" clipRule="evenodd" d="M17.2308 10.0518H0V0H28V194H0V183.948H17.2308V10.0518Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="14" y1="0" x2="14" y2="194" gradientUnits="userSpaceOnUse">
              <stop stopColor="#344ED8" />
              <stop offset="1" stopColor="#1F318E" />
            </linearGradient>
          </defs>
        </Bracket>
      </LogoName>
      <Infos className="spaceM">
        <div className="info resume">
          <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.362 2C13.518 2 12 8 12 8C12 8 18 6.35 18 10.457V22H2V2H9.362ZM10.189 0H0V24H20V9.614C20 7.223 13.352 0 10.189 0ZM15 13H12V12H15V13ZM15 15H12V16H15V15ZM15 18H5V19H15V18ZM10 12H5V16H10V12Z" />
          </svg>
          <p>Resume</p>
        </div>
        <div className="separator"/>
        <div className="info phone">
          <svg viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2C14 0.896 13.104 0 12 0H2C0.896 0 0 0.896 0 2V22C0 23.104 0.896 24 2 24H12C13.104 24 14 23.104 14 22V2ZM5.5 2H8.5C8.776 2 9 2.224 9 2.5C9 2.776 8.776 3 8.5 3H5.5C5.224 3 5 2.776 5 2.5C5 2.224 5.224 2 5.5 2ZM7 22C6.447 22 6 21.552 6 21C6 20.448 6.447 20 7 20C7.552 20 7.999 20.448 7.999 21C7.999 21.552 7.552 22 7 22ZM12 19H2V4.976H12V19Z"  />
          </svg>
          <p>(514) 550-7051</p>
        </div>
        <div className="separator"/>
        <div className="info mail">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.042 23.296C4.229 23.296 0 18.42 0 12.125C0 5.398 4.762 0 13.276 0C19.49 0 24 4.038 24 9.601C24 18.313 13.67 20.613 14.188 15.643C13.478 16.751 12.334 17.997 10.135 17.997C7.619 17.997 6.055 16.155 6.055 13.19C6.055 8.746 8.976 4.991 12.434 4.991C14.093 4.991 15.234 5.867 15.711 7.212L16.175 5.58H18.513C18.269 6.412 16.192 14.107 16.192 14.107C15.544 16.773 17.542 16.82 19.314 15.404C22.643 12.824 22.815 6.077 18.316 3.263C13.495 0.372 2.521 2.161 2.521 11.956C2.521 17.567 6.471 21.337 12.35 21.337C15.786 21.337 17.892 20.407 19.645 19.389L20.822 21.087C19.111 22.053 16.361 23.296 12.042 23.296ZM9.698 8.991C8.983 10.331 8.521 12.067 8.521 13.415C8.521 17.025 12.043 17.048 13.773 13.654C14.485 12.26 14.944 10.483 14.944 9.125C14.944 6.208 11.449 5.691 9.698 8.991Z"  />
          </svg>
          <p>kbweb98@gmail.com</p>
        </div>
      </Infos>
    </BannerContainer>
  );
}


const bannerHeight = '8rem'

const BannerContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  position: relative;
  @media ${sizes.phoneMid}{
    margin:0 0.5rem;
  }
`

const LogoName = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  width:100%;
`

const LogoSquare = styled.div`
  display: grid;
  height:${bannerHeight};
  width:${bannerHeight};
  background: linear-gradient(180deg, #344ED8 0%, #1F318E 100%);
  filter: var(--softShadow);
  @media ${sizes.phoneMid}{
    height:calc(${bannerHeight} / 1.25);
    width:calc(${bannerHeight} / 1.25);
  }
  position: relative;
  & .whiteSquare{
    position: absolute;
    left: 0;
    top: 0;
    width:0.75rem;
    height:0.75rem;
    background:white;
    
  }
`

const LogoKB = styled.svg`
  grid-area: 1 / 1 / span 1 / span 1;
  padding:0.9rem;
  height:100%;
  width:100%;
  & path {
    stroke-dashoffset: 688.246;
    animation: pathAnim 6s linear alternate infinite; 
  }
`

const NameTitle = styled.div`
  height:100%;
  text-align:center;
  font-family:var(--headingFont);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  color:var(--fontColor);
  & .name{
    font-size:3rem;
    font-weight: 700;
    @media ${sizes.phoneMid}{
      font-size:1.8rem;
      margin-bottom:0.5rem;
    }
    @media ${sizes.phoneSmall}{
      font-size:1.2rem;
    }
  }
  & .title{
    font-size:2.5rem;
    font-weight: 500;
    @media ${sizes.phoneMid}{
      font-size:1.4rem;
    }
    @media ${sizes.phoneSmall}{
      font-size:1rem;
    }
  }

`

const Bracket = styled.svg`
  height: ${bannerHeight};
  filter: var(--softShadow);
  @media ${sizes.phoneMid}{
    height:calc(${bannerHeight} / 1.25);
  }
`

const Infos = styled.div`
  display:flex;
  flex-direction:row;
  & .info{
    height:1rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    font-family:var(--headingFont);
    font-weight:500;
    color:var(--fontColor);
    & svg{
      max-height:1.5rem;
      width:1.25rem;
      margin-right:0.25rem;
      & path{
        fill:var(--fontColor);
      }
    }
  }
  & .separator{
    width:1.5rem;
  }
  @media ${sizes.phoneMid}{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:2rem;
    width:100%;
    & .separator{
      display: none;
    }
    & .resume{
      grid-area: 1 / 2 / span 1 / span 1;
      flex-direction:row-reverse;
      & svg{
        margin-left:0.25rem;
        margin-right:0;
      }
    }
  }
`
export default banner;
