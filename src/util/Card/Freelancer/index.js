import { Rating } from 'react-simple-star-rating'
import { Image } from 'react-bootstrap'
import styles from '../style.module.scss'

const FreelancerCard = ({ data }) => {
  const { avatar, rating, level, name, rate, role, skills } = data
  return (
    <div className={styles.freelancer}>
      <div className={styles.avatar}>
        <Image src={avatar} alt={name} roundedCircle />
        <div>
          <Rating
            readonly
            size={14}
            initialValue={rating}
            SVGstorkeWidth={1}
            emptyColor="transparent"
            SVGstrokeColor="#ffc107"
          />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.bio}>
          <div className={styles.left}>
            <div className={styles.level}>{level}</div>
            <div className={styles.name}>{name}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.text}>Starting</div>
            <div className={styles.rate}>{rate}.00$ /hr</div>
          </div>
        </div>
        <div className={styles.role}>{role}</div>
        <div className={styles.skills}>
          {skills.map((skill, idx) => (
            <div key={idx}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FreelancerCard
