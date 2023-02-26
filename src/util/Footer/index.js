import useIsMobile from 'util/Hooks/isMobile'
import FooterDesktop from './Desktop'
import FooterMobile from './Mobile'

const Footer = () => {
  const { isMobile } = useIsMobile()
  return isMobile ? <FooterMobile /> : <FooterDesktop />
}

export default Footer
