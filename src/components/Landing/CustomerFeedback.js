import { Image } from 'react-bootstrap'
import cn from 'classnames'
import AddIcon from 'assets/landing/add.svg'
import Person1 from 'assets/landing/person1.png'
import Person2 from 'assets/landing/person2.png'
import CustomerCard from 'util/Card/Customer'
import styles from './style.module.scss'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons'
import useIsMobile, { useIsTablet } from 'util/Hooks/isMobile'

const CustomerFeedback = () => {
  const people = Array(9).fill('')
  const { isMobile } = useIsMobile()
  const { isTablet } = useIsTablet()
  const feedback = [
    {
      bio:
        '“Vestibulum tempor nisl id finibus est sed dictum deo Proin ac orci quis metus in dictum elementum eu vele sapien. Morbi dolor nisl, at condimentum eget”',
      avatar: Person1,
      name: 'Quiche Hollandaise',
    },
    {
      bio:
        '“Curabitur vel odio sem en Duis ullamcorper quis est at iaculis. Sed rhoncus, at purus sed semper interdu malesuada, nisl sapien dui gravida velit ac”',
      avatar: Person2,
      name: 'Hans Down',
    },
  ]
  return (
    <div className={styles.feedback}>
      <div className={cn(styles.cardContainer, 'align-items-stretch')}>
        {feedback.map((item, idx) => (
          <CustomerCard data={item} key={idx} />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>What our customers say</div>
        <div className={styles.description}>
          Phasellus malesuada erat ut lectus accumsan varius. Nullam non quam
          sed elit tincidunt rhoncus.
        </div>

        <div
          className={`${styles.cardContainerTablet} align-items-stretch my-5`}
        >
          {feedback.map((item, idx) => (
            <CustomerCard data={item} key={idx} />
          ))}
        </div>
        {isMobile && <CustomerCard data={feedback[0]} />}
        <div className={styles.like}>
          <div>
            <div className={styles.subTitle}>2500 people loves</div>
            <div className={styles.imgContainer}>
              {people.map((_, idx) => (
                <Image
                  src={Person1}
                  alt="Person"
                  key={idx}
                  roundedCircle
                  className={styles.image}
                />
              ))}
              <Image
                src={AddIcon}
                alt="Add"
                roundedCircle
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.arrows}>
            <ArrowLeftCircle color="grey" />
            <ArrowRightCircle className="ms-5" />
          </div>
        </div>
        {isMobile && <CustomerCard data={feedback[1]} />}
      </div>
    </div>
  )
}

export default CustomerFeedback
