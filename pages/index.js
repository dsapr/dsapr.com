import Head from 'next/head'

import App from "@/components/app"
import Wrapper from '../components/Wrapper'
import SectionHero from '../components/home/section-hero'
import Content from '../components/home/content'
import Footer from '../components/Footer'
import Plum from '../components/layout/plum.tsx'

export default function Home (props) {
  return (
    <App {...props}>
      <Head>
        <title>dsapr&apos;s blog</title>
      </Head>
      <Wrapper>
        <SectionHero />
        <Content />
        <Footer />
      </Wrapper>
     
    </App>
  )
}

export async function getServerSideProps (context) { 
  // ?. 的个人理解 打个比方就是判断对象的某个属性是否存在，如果存在那么就返回整个属性的值，否则返回undefined
  // ?? 左侧值为 null 或 undefined 时，返回 ?? 符号右边的值
  const hueCookie = undefined
  const hue = hueCookie?.split("=")[1] ?? 42
  return {
    props: {
      hue
    }
  };
}
