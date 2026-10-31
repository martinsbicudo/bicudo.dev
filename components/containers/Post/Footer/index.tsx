import { Copyright, Socials } from '@Commons'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <Copyright />
      <Socials withSchedule={false} />
    </S.FooterContent>
  </S.Footer>
)

export default Footer
