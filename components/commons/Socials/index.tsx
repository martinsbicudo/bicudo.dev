import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandTwitter,
  TbMail,
  TbCalendarEvent,
} from 'react-icons/tb'

import { Bicudo } from '@Commons'

import { HOME } from '~/constants'

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
    <S.SocialsItemSchedule withResponsive={withScheduleResponsive}>
      <S.SocialsItem as="span">
        <S.SocialsLink href="https://appt.link/bicudo" target="_blank">
          <span>{HOME.SCHEDULE.BUTTON_TEXT.MOBILE}</span>
          <TbCalendarEvent />
        </S.SocialsLink>
      </S.SocialsItem>
    </S.SocialsItemSchedule>
  </S.Socials>
)

export default Socials
