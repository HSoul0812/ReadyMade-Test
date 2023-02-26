import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 769
const NAVBAR_BREAKPOINT = 992
const TABLET_BREAKPOINT = 1200
const SCREEN_SMALL_BREAKPOINT = 1600

// Hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT,
  )

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return { isMobile }
}

export const useIsTablet = () => {
  const tabletCondition =
    MOBILE_BREAKPOINT <= window.innerWidth &&
    window.innerWidth < TABLET_BREAKPOINT
  const [isTablet, setIsTablet] = useState(tabletCondition)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setIsTablet(
        MOBILE_BREAKPOINT <= window.innerWidth &&
          window.innerWidth < TABLET_BREAKPOINT,
      )
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [tabletCondition]) // Empty array ensures that effect is only run on mount

  return { isTablet }
}

export const useIsSmallScreen = () => {
  const SmallScreenCondition =
    TABLET_BREAKPOINT <= window.innerWidth &&
    window.innerWidth < SCREEN_SMALL_BREAKPOINT
  const [isSmallScreen, setIsSmallScreen] = useState(SmallScreenCondition)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setIsSmallScreen(
        TABLET_BREAKPOINT <= window.innerWidth &&
          window.innerWidth < SCREEN_SMALL_BREAKPOINT,
      )
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [SmallScreenCondition]) // Empty array ensures that effect is only run on mount

  return { isSmallScreen }
}

export const useIsMobileNavBar = () => {
  const [isMobileNavbar, setIsMobile] = useState(
    window.innerWidth < NAVBAR_BREAKPOINT,
  )

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < NAVBAR_BREAKPOINT)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return { isMobileNavbar }
}

export default useIsMobile
