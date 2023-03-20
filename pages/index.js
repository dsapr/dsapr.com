import Head from 'next/head'
import Wrapper from '../components/Wrapper'
import SectionHero from '../components/Home/section-hero'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <div>
      <Head>
        <title>dsapr&apos;s blog</title>
      </Head>
      <Wrapper>
        <SectionHero />
        <Footer />
      </Wrapper>
    </div>
  )
}
