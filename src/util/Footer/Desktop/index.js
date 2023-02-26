import { Link } from 'react-router-dom'
import cn from 'classnames'
import { Square } from 'react-bootstrap-icons'
import * as ROUTES from 'constants/routes'
import Logo from 'assets/logo.svg'
import styles from '../style.module.scss'

const FooterDesktop = () => {
  const NavigationLinks = [
    {
      title: 'Company',
      items: [
        {
          title: 'About Us',
          icon: <Square size={18} />,
          link: ROUTES.ABOUTUS,
        },
        {
          title: 'Features',
          icon: <Square size={18} />,
          link: ROUTES.FEATURES,
        },
        {
          title: 'How it Works',
          icon: <Square size={18} />,
          link: ROUTES.HOWITWORKS,
        },
      ],
    },
    {
      title: 'Policy',
      items: [
        {
          title: 'FAQ',
          icon: <Square size={18} />,
          link: ROUTES.FAQ,
        },
        {
          title: 'Contact',
          icon: <Square size={18} />,
          link: ROUTES.CONTACT,
        },
        {
          title: 'Shopping',
          icon: <Square size={18} />,
          link: ROUTES.SHOPPING,
        },
      ],
    },
    {
      title: 'Contact US',
      items: [
        {
          title: '455 West Orchard Street Kings Mountain, NC 28086',
        },
        {
          title: 'Phone: (272) 211-7370',
        },
        {
          title: 'E-Mail:',
          address: 'support@yourbrand.com',
        },
      ],
    },
  ]
  return (
    <div className={styles.footerDesktop}>
      <div className={styles.leftSide}>
        <p>
          Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
          libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet
          ullamcorper phasellus semper.
        </p>
        <img src={Logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.rightSide}>
        {NavigationLinks.map((navigation, idx) => (
          <div className={styles.section} key={idx}>
            <div className={styles.title}>{navigation.title}</div>
            <div className={styles.content}>
              <div className={styles.item}>
                {navigation.items.map((item) =>
                  idx === 2 ? (
                    <div key={item.title} className={cn('mt-5', styles.text)}>
                      {item.title}{' '}
                      {item?.address && (
                        <span className={styles.email}>{item.address}</span>
                      )}
                    </div>
                  ) : (
                    <div key={item.title} className="mt-4">
                      <Link to={item.link} className={styles.link}>
                        {item.icon} {item.title}
                      </Link>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterDesktop
