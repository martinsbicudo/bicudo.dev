import { Bicudo, ContactModal } from '@Commons'
import { useState } from 'react'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbCalendarEvent,
  TbMail,
} from 'react-icons/tb'

import { HOME } from '~/constants'

import { SocialsProps } from './interface'
import * as S from './styles'

const Socials = ({
  withBicudo = false,
  withScheduleResponsive = false,
}: SocialsProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
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
        <S.SocialsLink as="button" onClick={() => setIsContactOpen(true)}>
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
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </S.Socials>
  )
}

export default Socials
