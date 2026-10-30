import { ContactModal } from '@Commons'
import { useState } from 'react'
import {
  TbArrowRight,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from 'react-icons/tb'

import { HOME } from '~/constants'

import { SocialsProps } from './interface'
import * as S from './styles'

const Socials = ({ withScheduleResponsive = false }: SocialsProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <S.Socials>
      <S.SocialsLinks>
        <li>
          <S.SocialsLink
            href="https://www.linkedin.com/in/martinsbicudo"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandLinkedin aria-hidden />
            LinkedIn
          </S.SocialsLink>
        </li>
        <li>
          <S.SocialsLink
            href="https://github.com/martinsbicudo"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandGithub aria-hidden />
            GitHub
          </S.SocialsLink>
        </li>
        <li>
          <S.SocialsLink
            as="button"
            type="button"
            onClick={() => setIsContactOpen(true)}
          >
            <TbMail aria-hidden />
            Email
          </S.SocialsLink>
        </li>
      </S.SocialsLinks>
      <S.SocialsSchedule
        $withResponsive={withScheduleResponsive}
        href="https://appt.link/bicudo"
        target="_blank"
        rel="noreferrer"
      >
        {HOME.SCHEDULE.BUTTON_TEXT}
        <TbArrowRight aria-hidden />
      </S.SocialsSchedule>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </S.Socials>
  )
}

export default Socials
