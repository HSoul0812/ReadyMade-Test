import { Button, Image } from 'react-bootstrap'

import useIsMobile from 'util/Hooks/isMobile'
import styles from './style.module.scss'

const LogoMaker = () => {
  const { isMobile } = useIsMobile()
  return (
    <div className={styles.logoMaker}>
      <div className={styles.title}>Ready made logo maker</div>
      {isMobile && <div className={styles.logoMakerMobile}></div>}
      <div className={styles.description}>
        Make an incredible logo in minutes Pre-designed by top talent. Just add
        your touch.
      </div>
      <Button variant="primary" className={styles.button}>
        Try Reday Logo Maker
      </Button>
    </div>
  )
}

export default LogoMaker
