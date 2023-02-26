import { Carousel } from 'react-responsive-carousel'
import useIsMobile, { useIsSmallScreen, useIsTablet } from 'util/Hooks/isMobile'

const CustomCarousel = ({
  items,
  initialCount = 4,
  component: Card,
  containerClass,
  ...rest
}) => {
  const { isMobile } = useIsMobile()
  const { isTablet } = useIsTablet()
  const { isSmallScreen } = useIsSmallScreen()
  const count = isMobile
    ? 1
    : isTablet
    ? initialCount - 2
    : isSmallScreen
    ? initialCount - 1
    : initialCount
  let newItems = []
  let array = []
  items.forEach((item, idx) => {
    array.push(item)
    if (array.length % count === 0 || idx === items.length - 1) {
      newItems.push(array)
      array = []
    }
  })

  return (
    <Carousel {...rest}>
      {newItems.map((items, idx) => (
        <div className={containerClass} key={idx}>
          {items.map((item, key) => (
            <Card data={item} key={key} />
          ))}
        </div>
      ))}
    </Carousel>
  )
}

export default CustomCarousel
