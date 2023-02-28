import CategoryCard from 'util/Card/Category'
import { ReactComponent as DigitalIcon } from 'assets/landing/digital.svg'
import { ReactComponent as DesignIcon } from 'assets/landing/design.svg'
import { ReactComponent as MouseIcon } from 'assets/landing/mouse.svg'
import { ReactComponent as FinanceIcon } from 'assets/landing/finance.svg'
import styles from './style.module.scss'

const Category = () => {
  const categoryList = [
    {
      icon: <DigitalIcon />,
      title: 'Digital Marketing',
      description: 'Vivamus dignissim dictum libero curabitur ut.',
      highlight: '200k+ posted new jobs',
    },
    {
      icon: <DesignIcon />,
      title: 'Art & Desgin',
      description: 'Nullam sit amet eleifend nibh, id faucibus magna.',
      highlight: '500k+ posted new jobs',
    },
    {
      icon: <MouseIcon />,
      title: 'UI/UX Designer',
      description: 'Fusce rutrum augue in ligula maximus eleifend.',
      highlight: '650k+ posted new jobs',
    },
    {
      icon: <FinanceIcon />,
      title: 'Finance & Account',
      description: 'Fusce facilisis sit amet nulla eget fermentum.',
      highlight: '400k+ posted new jobs',
    },
  ]
  return (
    <div className={styles.category}>
      <div className={styles.title}>Explorer by Category</div>
      <div className={styles.subTitle}>
        Aliquam sed molestie sem, eget congue erat. Orci varius natoque
        penatibus et magnis.
      </div>
      <div className={styles.content}>
        {categoryList.map((item, idx) => (
          <CategoryCard key={idx} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Category
