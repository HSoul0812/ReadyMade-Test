import useIsSmallScreen from 'util/Hooks/isMobile'
import FooterDesktop from './Desktop'
import FooterMobile from './Mobile'

const Footer = () => {
  const { isSmallScreen } = useIsSmallScreen()
  return isSmallScreen ? <FooterMobile /> : <FooterDesktop />
}

export default Footer
