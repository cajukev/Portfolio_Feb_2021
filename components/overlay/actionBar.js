import styled, { css } from 'styled-components'
import Logo from '../logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
const actionBar = (props) => {
  const router = useRouter()
  const changeRoute = (newRoute) =>{
    router.replace("/"+newRoute+router.asPath.slice(-3), undefined, {scroll: false}).then(() => {
      setTimeout(function(){window.scrollTo(0,0)}, 200)
    })
  }
  const triggerSwitchTheme = () => {
    props.switchTheme()
  }
  const changeLanguage = () => {
    const currentLang = router.asPath.slice(-2)
    if (currentLang == 'fr') {
      router.push({ pathname: router.asPath.replace('fr', 'en') }, undefined, { scroll: false })
    } else {
      router.push({ pathname: router.asPath.replace('en', 'fr') }, undefined, { scroll: false })
    }
  }
  const handleKeyPress = (e, fct) => {
    if (e.key == "Enter") {
      switch (fct) {
        case 'theme':
          triggerSwitchTheme()
          break;
        case 'lang':
          changeLanguage()
          break;
      }
    }
  }
  return (
    <ActionBarContainer>
      <Logo height={barHeight}/>
      <div className="ABLinks" onMouseOver={() => props.navTrigger(false)}>
        <a onClick={() => changeRoute('landing')} >Confetti Cannon</a>
        <a onClick={() => changeRoute('home')} >About Me</a>
        <a onClick={() => changeRoute('freelanceCS')} >Freelance Project</a>
      </div>
      <div className="ABOptions">
        <div className="option theme" onClick={triggerSwitchTheme} tabIndex={0} onKeyPress={(e) => handleKeyPress(e, 'theme')}>
        theme
        </div>
        <div className="option lang" onClick={changeLanguage} tabIndex={0} onKeyPress={(e) => handleKeyPress(e, 'lang')}>
        lang
        </div>
      </div>
    </ActionBarContainer>
  );
}
export const barHeight = '2rem';
const ActionBarContainer = styled.div`
  position:fixed;
  top:0;
  width:100%;
  background:var(--barBG);
  filter: var(--largeShadow);
  display:grid;
  grid-template-columns: ${barHeight} 1fr 5rem;
  color: var(--fontColor);
  transition: all 0.2s ease-out;
  & .ABLinks{
    display:flex;
    align-items:center;
    & a{
      font-family: var(--bodyFont);
      margin-left:1.5rem;
    }
  }
`

export default actionBar;
