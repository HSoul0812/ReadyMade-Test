import cn from 'classnames'
import Carousel from 'react-multi-carousel'
import CustomCarousel from 'util/Carousel'
import ServiceCard from 'util/Card/Service'
import Image1 from 'assets/landing/service1.png'
import Image2 from 'assets/landing/service2.png'
import Image3 from 'assets/landing/service3.png'
import Image4 from 'assets/landing/service4.png'
import Image5 from 'assets/landing/service5.png'
import { ReactComponent as ArrowLeft } from 'assets/landing/arrowLeft.svg'
import { ReactComponent as ArrowRight } from 'assets/landing/arrowRight.svg'

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
const responsive = {
  desktop1: {
    breakpoint: { max: 3000, min: 1850 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1850, min: 1500 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1500, min: 1400 },
    items: 5,
  },
  tablet1: {
    breakpoint: { max: 1400, min: 1200 },
    items: 4,
  },
  tablet2: {
    breakpoint: { max: 1200, min: 942 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 942, min: 678 },
    items: 2,
  },
  mobile1: {
    breakpoint: { max: 678, min: 0 },
    items: 1,
  },
}

const PopularService = () => {
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow },
    } = rest

    return (
      <div className="carousel-button-group">
        <ArrowLeft
          aria-label="Go to previous slide"
          className={
            currentSlide === 0
              ? 'disable'
              : 'react-multiple-carousel__arrow react-multiple-carousel__arrow--left'
          }
          onClick={() => previous()}
        />
        <ArrowRight
          aria-label="Go to next slide"
          className={
            currentSlide === totalItems - slidesToShow
              ? 'disable'
              : 'react-multiple-carousel__arrow react-multiple-carousel__arrow--right'
          }
          onClick={() => next()}
        />
      </div>
    )
  }

  return (
    <div className={styles.popularService}>
      <div className={styles.title}>Popular professional services</div>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass={styles.wrapper}
        customRightArrow={<ArrowRight />}
        customLeftArrow={<ArrowLeft />}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        {mockData.map((item, idx) => (
          <div className="d-flex justify-content-center" key={idx}>
            <ServiceCard data={item} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default PopularService
