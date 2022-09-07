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
import { Element, Link } from 'react-scroll'

const Home: NextPage = () => {
  return (
    <Navbar>
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
        <Moreinfo />
    </Navbar>

  )
}

export default Home
