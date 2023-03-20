import styled, { keyframes } from 'styled-components'

import Avatar from './avatar'
import SvgUnderline from "../../public/svg/underline.svg"

const HeroSection = styled.div`
  margin-top: 3.5rem;
  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`
const Title = styled.div`
  /* hsla(色相，饱和度，亮度，透明度) */ 
  color: hsla(240, 68%, 5%, 1); 
  font-weight: 700;
  font-size: 2rem;
  margin-top: 22px;
  margin-left: 2px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const tick = keyframes`
  0%, 50% {
    stroke-dashoffset: 234px;
  }
  50%, 100% {
    stroke-dashoffset: 0px;
  }
`

const Underline = styled(SvgUnderline)`
  position: absolute;
  color: hsl(${props => props.hue - 8}, 100%, 70%);
  z-index: -1;
  height: 26px;
  left: 100px;
  bottom: -6px;
  stroke-dasharray: 234px;
  stroke-dashoffset: 234px;
  animation: 3s ${tick} ease-in-out forwards;

  @media (min-width: 768px) {
    position: relative;
    bottom: 0;
    top: 20px;
    left: -201px;
    height: 42px;
  }
`

export default function Component () {
  return (
    <HeroSection>
      <Avatar />
      <Title>
        Hi, I'm dsapr.

        <Underline/>

      </Title>
    </HeroSection>
  )
}