import FreelancerCard from 'util/Card/Freelancer'
import Ahmed from 'assets/landing/ahmed.png'
import Jane from 'assets/landing/jane.png'
import Iyad from 'assets/landing/iyad.png'
import Hassan from 'assets/landing/hassan.png'
import styles from './style.module.scss'
import CustomCarousel from 'util/Carousel'

const freelancers = [
  {
    avatar: Ahmed,
    rating: 5,
    level: 'Expert Freelancer',
    name: 'Ahmed Mo.',
    rate: '10',
    role: 'A passionate creative with a thing for bra….',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
  {
    avatar: Jane,
    rating: 5,
    level: 'Expert Freelancer',
    name: 'Jane De.',
    rate: '15',
    role: 'Brand Identity Designer',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
  {
    avatar: Iyad,
    rating: 4,
    level: 'Expert Freelancer',
    name: 'Iyad A.C',
    rate: '20',
    role: 'A passionate creative with a thing for bra….',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
  {
    avatar: Hassan,
    rating: 3,
    level: 'Expert Freelancer',
    name: 'Hassan S.C',
    rate: '30',
    role: 'A passionate creative with a thing for bra….',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
  {
    avatar: Ahmed,
    rating: 5,
    level: 'Expert Freelancer',
    name: 'Ahmed Mo.',
    rate: '10',
    role: 'A passionate creative with a thing for bra….',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
  {
    avatar: Jane,
    rating: 5,
    level: 'Expert Freelancer',
    name: 'Jane De.',
    rate: '15',
    role: 'Brand Identity Designer',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
  {
    avatar: Iyad,
    rating: 4,
    level: 'Expert Freelancer',
    name: 'Iyad A.C',
    rate: '20',
    role: 'A passionate creative with a thing for bra….',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
  {
    avatar: Hassan,
    rating: 3,
    level: 'Expert Freelancer',
    name: 'Hassan S.C',
    rate: '30',
    role: 'A passionate creative with a thing for bra….',
    skills: [
      'Data Visualization',
      'Marketing Presentation',
      'Business Presentation',
      'Consulting Presentation',
      'Sales Pitch Design',
      'Product Demo Presentation',
      'Data Visualization',
      'Marketing Presentation',
    ],
  },
]
const TopRate = () => {
  return (
    <div className={styles.topRate}>
      <div className={styles.title}>
        Explore top-rated freelancers on Ready made
      </div>
      <CustomCarousel
        showArrows={false}
        showStatus={false}
        component={FreelancerCard}
        items={freelancers}
        containerClass={styles.container}
      />
    </div>
  )
}

export default TopRate
