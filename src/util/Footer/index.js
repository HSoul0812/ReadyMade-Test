import useIsMobile from 'util/Hooks/isMobile'
import FooterDesktop from './Desktop'
import FooterMobile from './Mobile'

const Footer = () => {
  const { isTablet } = useIsMobile()
  return isTablet ? <FooterMobile /> : <FooterDesktop />
}

export default Footer
