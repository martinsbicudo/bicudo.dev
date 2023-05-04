import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandTwitter,
  TbMail,
  TbCalendarEvent,
} from 'react-icons/tb'

import { Bicudo } from '@Commons'

import { SocialsProps } from './interface'
import * as S from './styles'

const Socials = ({
  withBicudo = false,
  withScheduleResponsive = false,
}: SocialsProps) => (
  <S.Socials>
    {withBicudo && (
      <S.SocialsItem>
        <Bicudo />
      </S.SocialsItem>
    )}
    <S.SocialsItem>
      <S.SocialsLink
        href="https://www.linkedin.com/in/martinsbicudo"
        target="_blank"
      >
        <TbBrandLinkedin />
      </S.SocialsLink>
    </S.SocialsItem>
    <S.SocialsItem>
      <S.SocialsLink href="https://github.com/martinsbicudo" target="_blank">
        <TbBrandGithub />
      </S.SocialsLink>
    </S.SocialsItem>
    <S.SocialsItem>
      <S.SocialsLink href="https://twitter.com/martinsbicudo" target="_blank">
        <TbBrandTwitter />
      </S.SocialsLink>
    </S.SocialsItem>
    <S.SocialsItem>
      <S.SocialsLink href="mailto:victor_bicudo@outlook.com">
        <TbMail />
      </S.SocialsLink>
    </S.SocialsItem>
    <S.SocialsItem withResponsive={withScheduleResponsive}>
      <S.SocialsLink
        href="https://superpowered.me/martinsbicudo"
        target="_blank"
      >
        <span>MARCAR UM PAPO</span>
        <TbCalendarEvent />
      </S.SocialsLink>
    </S.SocialsItem>
  </S.Socials>
)

export default Socials
