import { Button } from 'react-bootstrap'
import styles from './style.module.scss'

const BusinessGrowing = () => {
  return (
    <div className={styles.business}>
      <div className={styles.container}>
        <div className={styles.title}>
          Find the talent needed to get <br />
          your business <span className={styles.highlight}>growing.</span>
        </div>
        <Button>Get Standerd</Button>
      </div>
    </div>
  )
}

export default BusinessGrowing
