import type { NextPage } from 'next'
import  Navbar  from '../components/Navbar/Navbar'
import HomePage from '../components/content/Home/Home'
import Running from '../components/content/Running/Running'
import Performance from '../components/content/Performance/Performance'
import Howto from '../components/content/Howto/Howto'
import Terms from '../components/content/Terms/Terms'
import News from '../components/content/News/News'
import Faq from '../components/content/FAQ/Faq'
import Moreinfo from '../components/content/Moreinfo/Moreinfo'
import Footer from '../components/Footer/Footer'
import { Element, Link } from 'react-scroll'
// import useResponsive from '../components/Responsive/useResponsive'
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from '../components/Navbar/MobileNavbar'
// import Source from '../components/content/News/Source'

const Home: NextPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 920px)'
  })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 920px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  // const isMobile = useMediaQuery({ query: '(max-width: 414px)' })
  return (
    <>
    {/* {isDesktopOrLaptop && <Navbar/>}
    {isBigScreen && <Navbar/>}
    {isPortrait && <Navbar/>}
    {isTablet && <Navbar/>} */}
    {isDesktopOrLaptop && <Navbar/>}
    {isTablet && <MobileNavbar />}
      <Element className="element" name="section1" >
        <HomePage />
        <Running />
      </Element>
      <Element className="element" name="section2" >
        <Performance />
      </Element>
      <Element className="element" name="section3" >
        <Howto />
      </Element>
      <Element className="element" name="section4" >
        <Terms />
      </Element>
      <Element className="element" name="section5" >
        <News />
      </Element>
      <Element className="element" name="section6" >
        <Faq />
      </Element>
  {/* <Source /> */}
        <Moreinfo />
        <Footer />
    </>
  )
}

export default Home
