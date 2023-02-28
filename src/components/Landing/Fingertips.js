import { Image } from 'react-bootstrap'
import { ReactComponent as Budget } from 'assets/landing/budget.svg'
import { ReactComponent as Quality } from 'assets/landing/quality.svg'
import { ReactComponent as Protect } from 'assets/landing/protect.svg'
import { ReactComponent as Support } from 'assets/landing/support.svg'
import { ReactComponent as RectangleGreen } from 'assets/landing/rectangle-green.svg'
import { ReactComponent as RectangleYellow } from 'assets/landing/rectangle-yellow.svg'

import FingtipsImage from 'assets/landing/fingertips.png'
import styles from './style.module.scss'

//        .
const Fingertips = () => {
  const mockData = [
    {
      icon: <Budget />,
      title: 'The Best for every budget',
      description:
        'Find high-quality services at every price point. No hourly rates, just project-based pricing.',
    },
    {
      icon: <Quality />,
      title: 'Quality work done quickly',
      description:
        'Find the right freelancer to begin working on your project within minutes.',
    },
    {
      icon: <Protect />,
      title: 'Protected payments, every time',
      description:
        'Always know what you’ll pay upfront. Your payment isn’t released until you approve the work.',
    },
    {
      icon: <Support />,
      title: '24/7 support',
      description:
        'Questions? Our round-the-clock support team is available to help anytime, anywhere',
    },
  ]
  return (
    <div className={styles.fingertips}>
      <div className={styles.title}>
        A whole world of freelance talent <br />
        at your fingertips
      </div>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          {mockData.map((item, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.image}>{item.icon}</div>
              <div className={styles.content}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.rightSide}>
          <RectangleYellow className={styles.rectYellow} />
          <RectangleGreen className={styles.rectGreen} />
          <Image src={FingtipsImage} alt="FingerTips" />
        </div>
      </div>
    </div>
  )
}

export default Fingertips
