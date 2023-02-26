import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavDropdown } from 'react-bootstrap'
import { useIsMobileNavBar } from 'util/Hooks/isMobile'
import * as ROUTES from 'constants/routes'
import LogoIcon from 'assets/logo.svg'
import DropDownIcon from 'assets/dropdown-icon.svg'

import styles from '../style.module.scss'

const NavigationNonAuth = () => {
  const navigate = useNavigate()
  const { isMobileNavbar } = useIsMobileNavBar()
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  const navigationLinksNonAuth = [
    {
      class: 'nonAuthButton',
      title: 'Ready Business',
      link: ROUTES.BUSINESS,
      dropdownItems: [],
      onClickFunc: () => navigate(ROUTES.BUSINESS),
    },
    {
      class: 'nonAuthButton',
      title: 'Explore',
      link: ROUTES.EXPLORE,
      dropdownItems: [],
      onClickFunc: () => navigate(ROUTES.EXPLORE),
    },
    {
      class: 'nonAuthButton',
      title: 'English',
      link: ROUTES.LANGUAGE,
      dropdownItems: [],
      onClickFunc: () => navigate(ROUTES.LANGUAGE),
    },
    {
      class: 'nonAuthButton',
      title: 'US$ USD',
      link: ROUTES.CURRENCY_TYPE,
      dropdownItems: [],
      onClickFunc: () => navigate(ROUTES.CURRENCY_TYPE),
    },
    {
      class: 'nonAuthButton',
      title: 'Become a Seller',
      link: ROUTES.SELLER,
      dropdownItems: [],
      onClickFunc: () => navigate(ROUTES.SELLER),
    },
    {
      class: 'authButton --sign-up',
      title: 'Sign Up',
      link: ROUTES.SIGN_UP,
      onClickFunc: () => navigate(ROUTES.SIGN_UP),
    },
    {
      class: 'authButton --sign-in',
      title: 'Sign In',
      link: ROUTES.SIGN_IN,
      onClickFunc: () => navigate(ROUTES.SIGN_IN),
    },
  ]

  useEffect(() => {
    const appClasses = window.document.getElementsByClassName('App')[0]
      .classList
    if (!isMobileNavbar && appClasses.contains('overflow-hidden')) {
      appClasses.remove('App-vh-100', 'overflow-hidden')
      setNavbarExpanded(false)
    }
  }, [isMobileNavbar])

  const onToggleMobile = () => {
    const appClasses = window.document.getElementsByClassName('App')[0]
      .classList

    if (isMobileNavbar && appClasses.contains('overflow-hidden')) {
      appClasses.remove('App-vh-100', 'overflow-hidden')
      setNavbarExpanded(false)
    } else {
      appClasses.add('App-vh-100', 'overflow-hidden')
      setNavbarExpanded(true)
    }
  }

  return (
    <Navbar
      className={styles.navbar}
      expand="lg"
      onToggle={onToggleMobile}
      expanded={navbarExpanded}
    >
      <NavbarBrand>
        <a href={window.location.origin}>
          <img src={LogoIcon} alt="Logo" className={styles.readyVladeLogo} />
        </a>
      </NavbarBrand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setNavbarExpanded((value) => !value)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {navigationLinksNonAuth.map((dropdownButton, idx) => {
            const title = (
              <>
                {dropdownButton.title}{' '}
                <img src={DropDownIcon} alt="DropDown Icon" />
              </>
            )
            return dropdownButton.dropdownItems ? (
              <NavDropdown
                title={title}
                key={idx}
                className={dropdownButton.class}
                onClick={dropdownButton.onClickFunc}
              >
                {dropdownButton.dropdownItems.map((dropdownCategories, idx) => (
                  <NavDropdown.Item
                    key={idx}
                    onClick={dropdownCategories.onClickFunc}
                    className={dropdownCategories.class}
                  >
                    {dropdownCategories.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              <Link
                key={idx}
                className={dropdownButton.class}
                to={dropdownButton.link}
              >
                {dropdownButton.title}
              </Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationNonAuth
