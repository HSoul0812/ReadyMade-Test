import cn from 'classnames'
import FindFreelancers from './FindFreelancers'
import TopRate from './TopRate'
import styles from './style.module.scss'
import PopularService from './PopularService'
import Fingertips from './Fingertips'
import LogoMaker from './LogoMaker'
import GetBestJob from './GetBestJob'
import Category from './Category'
import CustomerFeedback from './CustomerFeedback'
import BusinessGrowing from './BusinessGrowing'

const Landing = () => {
  return (
    <div className={cn('App-body', styles.wrapper)}>
      <FindFreelancers />
      <div className={styles.cardContainer}>
        <TopRate />
        <PopularService />
      </div>
      <Fingertips />
      <LogoMaker />
      <GetBestJob />
      <Category />
      <CustomerFeedback />
      <BusinessGrowing />
    </div>
  )
}

export default Landing
