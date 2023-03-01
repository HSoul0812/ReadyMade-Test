import { QuestionSquare } from 'react-bootstrap-icons'
import { Image } from 'react-bootstrap'
import cn from 'classnames'
import LogoIcon from 'assets/logo.svg'
import styles from '../style.module.scss'

const FooterTablet = () => {
  return (
    <div className={styles.footerTablet}>
      <div className={styles.title}>
        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
        libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet
        ullamcorper phasellus semper.
      </div>
      <div className="d-flex justify-content-between ">
        <div>
          <Image src={LogoIcon} alt="Logo" className={styles.logo} />
          <div className={styles.contactInfo}>Phone (272) 211-7370</div>
          <div className={styles.contactInfo}>
            E-Mail: <span>support@yourbrand.com</span>
          </div>
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
          <div className={cn(styles.section, 'ms-5')}>
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
      </div>
      <div className="d-flex my-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <QuestionSquare
              key={index}
              color="#009800"
              size={25}
              className="me-3"
            />
          ))}
      </div>
      <div className="d-flex">
        <div className={cn(styles.title, styles.contact)}>
          Contact Us
          <span>455 West Orchard Street Kings Mountain, NC 28086</span>
        </div>
      </div>
    </div>
  )
}

export default FooterTablet
