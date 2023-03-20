import Head from 'next/head'
import Wrapper from '../components/Wrapper'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <div>
      <Head>
        <title>dsapr&apos;s blog</title>
      </Head>
      <Wrapper>
        <Footer />
      </Wrapper>
    </div>
  )
}
