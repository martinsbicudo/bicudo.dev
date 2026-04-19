import { Bicudo } from '@Commons'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbCalendarEvent,
  TbCoffee,
  TbMail,
} from 'react-icons/tb'

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
      <S.SocialsLink href="https://buymeacoffee.com/bicudo" target="_blank">
        <TbCoffee />
      </S.SocialsLink>
    </S.SocialsItem>
    <S.SocialsItem>
      <S.SocialsLink href="mailto:victor.mbicudo@gmail.com">
        <TbMail />
      </S.SocialsLink>
    </S.SocialsItem>
    <S.SocialsItemSchedule $withResponsive={withScheduleResponsive}>
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
