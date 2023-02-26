import { Image } from 'react-bootstrap'
import styles from '../style.module.scss'

const CustomerCard = ({ data }) => {
  const { bio, avatar, name } = data
  return (
    <div className={styles.customer}>
      <div className={styles.bio}>{bio}</div>
      <div className="d-flex align-items-center">
        <Image className={styles.avatar} src={avatar} alt={name} />
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}

export default CustomerCard
