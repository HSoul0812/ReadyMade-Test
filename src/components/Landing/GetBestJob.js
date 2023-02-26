import { Rating } from 'react-simple-star-rating'
import { Check } from 'react-bootstrap-icons'
import Binoculars from 'assets/landing/binoculars.png'
import styles from './style.module.scss'

const GetBestJob = () => {
  const checkList = [
    'Bring to the table win-win survival',
    'Capitalize on low hanging fruit to identify',
    'But I must explain to you how all this',
  ]
  return (
    <div className={styles.getBestJob}>
      <div className={styles.contentLeft}>
        <div className={styles.container}>
          <img src={Binoculars} alt="Binoculars" className={styles.image} />
          <div className={styles.card}>
            <div className={styles.title}>Found 250+ Jobs</div>
            <Rating
              readonly
              size={14}
              initialValue={5}
              SVGstorkeWidth={1}
              emptyColor="transparent"
              SVGstrokeColor="#ffc107"
            />
            <div className={styles.highlight}>+20 Glants</div>
          </div>
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.title}>
          Help you to get the best job that fits you
        </div>
        <div className={styles.description}>
          Quisque efficitur lorem vel arcu laoreet, quis euismod neque semper.
          Vestibulum nisl lacus.
        </div>
        <div className={styles.checkList}>
          {checkList.map((item, idx) => (
            <div key={idx} className="d-flex align-items-center my-3">
              <Check color="#57C19D" size={25} />
              <div className="ms-2">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GetBestJob
