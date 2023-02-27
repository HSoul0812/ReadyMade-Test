import { useState } from 'react'
import cn from 'classnames'
import { ArrowUpRight } from 'react-bootstrap-icons'
import SearchInput from 'util/Inputs/SearchInput'
import Banner from 'util/Banner'
import { ReactComponent as MarketingIcon } from 'assets/landing/marketing.svg'
import { ReactComponent as BusinessIcon } from 'assets/landing/business.svg'
import { ReactComponent as DollarIcon } from 'assets/landing/dollar.svg'
import { ReactComponent as ArtIcon } from 'assets/landing/art.svg'
import { ReactComponent as CurveIcon } from 'assets/landing/curve.svg'
import { ReactComponent as Facebook } from 'assets/landing/facebook.svg'
import { ReactComponent as Google } from 'assets/landing/google.svg'
import { ReactComponent as Netflix } from 'assets/landing/netflix.svg'
import { ReactComponent as Pandg } from 'assets/landing/pandg.svg'
import { ReactComponent as Paypal } from 'assets/landing/paypal.svg'
import PersonImg from 'assets/landing/person.png'

import styles from './style.module.scss'
import useIsMobile from 'util/Hooks/isMobile'

const FindFreelancers = () => {
  const { isMobile } = useIsMobile()
  const [searchVal, setSearchVal] = useState()

  const popularList = [
    { icon: <DollarIcon />, text: 'Finance' },
    { icon: <BusinessIcon />, text: 'Marketing' },
    { icon: <ArtIcon />, text: 'Designer' },
    { icon: <MarketingIcon />, text: 'Sales' },
  ]

  const bannerItems = [
    <Facebook />,
    <Google />,
    <Netflix />,
    <Pandg />,
    <Paypal />,
  ]

  const handleInputChange = (e) => setSearchVal(e.target.value)

  return (
    <>
      <div className={styles.findFree}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            The freelancer <br /> your needs.
            <CurveIcon className={styles.curve} />
          </div>
          <div className={styles.content}>
            Find freelancers in various fields, from beginners to professionals
          </div>
          <SearchInput
            placeholder="Search item name or keywords"
            onChange={handleInputChange}
            value={searchVal}
            className="my-3"
          />
          {isMobile && <p>Popular: </p>}
          <div className={styles.popular}>
            {!isMobile && <span>Popular: </span>}
            {popularList.map((item) => (
              <div key={item.text} className="d-flex align-items-center ms-3">
                <div className={styles.icon}>{item.icon}</div>
                <div className="mx-1">{item.text} </div>
                <ArrowUpRight color="grey" size={15} />
              </div>
            ))}
          </div>
        </div>
        <img src={PersonImg} alt="Person" className={styles.person} />
      </div>
      <Banner
        title="Trusted by:"
        items={bannerItems}
        className={styles.banner}
      />
    </>
  )
}

export default FindFreelancers
