import { Square } from 'react-bootstrap-icons'
import cn from 'classnames'
import LogoIcon from 'assets/logo.svg'
import styles from '../style.module.scss'
import { Image } from 'react-bootstrap'
const FooterMobile = () => {
  return (
    <div className={styles.footerMobile}>
      <div className={styles.title}>
        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
        libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet
        ullamcorper phasellus semper.
      </div>
      <div className="d-flex mt-4">
        <div className={styles.section}>
          <div className={styles.title}>Company</div>
          <div className={styles.description}>
            <Square /> About Us
          </div>
          <div className={styles.description}>
            <Square /> Features
          </div>
          <div className={styles.description}>
            <Square /> How it Works
          </div>
          <Image src={LogoIcon} alt="Logo" className={styles.logo} />
          <div className={styles.contactInfo}>Phone (272) 211-7370</div>
          <div className={styles.contactInfo}>
            E-Mail: <span>support@yourbrand.com</span>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Policy</div>
          <div className={styles.description}>
            <Square /> FAQ
          </div>
          <div className={styles.description}>
            <Square /> Contact
          </div>
          <div className={styles.description}>
            <Square /> Shopping
          </div>
          <div className={cn(styles.title, styles.contact)}>Contact Us</div>
          <div className={styles.contactInfo}>455 West Orchard Street</div>
          <div className={styles.contactInfo}>Kings Mountain, NC 28086</div>
        </div>
      </div>
    </div>
  )
}

export default FooterMobile
