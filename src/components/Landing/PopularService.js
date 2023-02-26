import { Carousel } from 'react-responsive-carousel'
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from 'react-bootstrap-icons'
import CustomCarousel from 'util/Carousel'
import ServiceCard from 'util/Card/Service'
import Image1 from 'assets/landing/service1.png'
import Image2 from 'assets/landing/service2.png'
import Image3 from 'assets/landing/service3.png'
import Image4 from 'assets/landing/service4.png'
import Image5 from 'assets/landing/service5.png'

import styles from './style.module.scss'

const mockData = [
  {
    image: Image1,
    title: 'Build your brand',
    highlight: 'Logo Desgin',
  },
  {
    image: Image2,
    title: 'Customize your website',
    highlight: 'Web Development',
  },
  {
    image: Image3,
    title: 'Share your message',
    highlight: 'Voice Over',
  },
  {
    image: Image4,
    title: 'Engage your audience',
    highlight: 'Video Explainer',
  },
  {
    image: Image5,
    title: 'Reach more customers',
    highlight: 'Social Media',
  },
]

const PopularService = () => {
  return (
    <div className={styles.popularService}>
      <div className={styles.title}>Popular professional services</div>
      <CustomCarousel
        axis="horizontal"
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${hasPrev ? 'position-absolute' : 'd-none'} ${
                styles.arrow
              }`}
              onClick={clickHandler}
            >
              <ArrowLeftCircleFill size={50} className="text-white" />
            </div>
          )
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${hasNext ? 'position-absolute' : 'd-none'} ${
                styles.arrow
              } ${styles.right}`}
              onClick={clickHandler}
            >
              <ArrowRightCircleFill size={50} className="text-white" />
            </div>
          )
        }}
        component={ServiceCard}
        containerClass={styles.wrapper}
        items={mockData}
        initialCount={5}
      />
    </div>
  )
}

export default PopularService
