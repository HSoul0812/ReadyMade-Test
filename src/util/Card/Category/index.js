import styles from '../style.module.scss'

const CategoryCard = ({ data }) => {
  const { icon, title, description, highlight } = data
  return (
    <div className={styles.category}>
      <div>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.highlight}>{highlight}</div>
    </div>
  )
}

export default CategoryCard
