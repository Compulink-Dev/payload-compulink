import type { Metadata } from 'next'
import Parnters from './_components/partners'
import About from './_components/about'
import Work from './_components/work'
import Service from './_components/service'
import Testimonials from './_components/testimonials'
import HomeCarousel from './_components/carousel'
import Promotion from './_components/promotions'
import Hero from './_components/hero'
import Chatbot from './_components/chatbot'

export const metadata: Metadata = {
  title: 'IT Solutions & Services in Zimbabwe | Cloud, Cybersecurity, Software',
  description:
    'Compulink is Zimbabwe\'s leading IT solutions provider with 30+ years of experience. Cloud computing, cybersecurity, software development, networking, and hardware solutions.',
  openGraph: {
    title: 'Compulink | IT Solutions & Services in Zimbabwe',
    description:
      'Zimbabwe\'s leading IT solutions provider. Cloud computing, cybersecurity, software development, networking, and hardware for 30+ years.',
  },
}

export default function Home() {
  return (
    <div>
      <Hero backImage={'web3.webp'} image={''} />
      <div className="">
        <Parnters />
        <About />
        <Work />
        <Service />
        <Testimonials />
        <HomeCarousel />
        <Promotion />
        <Chatbot />
      </div>
    </div>
  )
}
