import { QuestionSquare } from 'react-bootstrap-icons'
import { Image } from 'react-bootstrap'
import cn from 'classnames'
import LogoIcon from 'assets/logo.svg'
import styles from '../style.module.scss'
const FooterMobile = () => {
  return (
    <div className={styles.footerMobile}>
      <div className={styles.title}>
        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
        libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet
        ullamcorper phasellus semper.
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div className={styles.section}>
          <div className={styles.title}>Company</div>
          <div className={styles.description}>
            <QuestionSquare /> About Us
          </div>
          <div className={styles.description}>
            <QuestionSquare /> Features
          </div>
          <div className={styles.description}>
            <QuestionSquare /> How it Works
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Policy</div>
          <div className={styles.description}>
            <QuestionSquare /> FAQ
          </div>
          <div className={styles.description}>
            <QuestionSquare /> Contact
          </div>
          <div className={styles.description}>
            <QuestionSquare /> Shopping
          </div>
        </div>
      </div>
      <Image src={LogoIcon} alt="Logo" className={styles.logo} />
      <div className={cn(styles.title, styles.contact)}>Contact Us</div>
      <div className={styles.contactInfo}>Phone (272) 211-7370</div>
      <div className={styles.contactInfo}>
        E-Mail: <span>support@yourbrand.com</span>
      </div>
      <div className="d-flex"></div>
      <div className={styles.contactInfo}>455 West Orchard Street Kings</div>
      <div className={styles.contactInfo}>Mountain, NC 28086</div>
    </div>
  )
}

export default FooterMobile
