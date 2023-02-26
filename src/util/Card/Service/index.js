import styles from '../style.module.scss'

const ServiceCard = ({ data }) => {
  const { image, title, highlight } = data
  return (
    <div
      className={styles.service}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.highlight}>{highlight}</div>
    </div>
  )
}

export default ServiceCard
