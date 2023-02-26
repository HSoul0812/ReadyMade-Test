import NavigationNonAuth from './NonAuth'
import styles from './style.module.scss'

const Navigation = () => {
  return (
    <div>
      <NavigationNonAuth />
      <div className={styles.divider}></div>
    </div>
  )
}

export default Navigation
