import NextImage from 'next/image'

import { BicudoProps } from './interface'
import * as S from './styles'

const Bicudo = ({ size = 42 }: BicudoProps) => (
  <S.BicudoWrapper width={`${size}px`} height={`${size}px`}>
    <NextImage
      src="/images/bicudo.jpg"
      title="bicudo"
      alt="bicudo"
      width={size}
      height={size}
    />
  </S.BicudoWrapper>
)

export default Bicudo
