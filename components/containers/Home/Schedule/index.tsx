import { memo } from 'react'
import { TbArrowRight } from 'react-icons/tb'

import { HOME } from '~/constants'

import * as S from './styles'

const Schedule = () => {
  return (
    <S.ScheduleWrapper>
      <S.Schedule>
        <S.ScheduleLabel>
          <S.ScheduleDot />
          {HOME.SCHEDULE.LABEL}
        </S.ScheduleLabel>
        <S.ScheduleTitle>{HOME.SCHEDULE.TITLE}</S.ScheduleTitle>
        <S.ScheduleLink
          href="https://appt.link/bicudo"
          target="_blank"
          rel="noreferrer"
        >
          {HOME.SCHEDULE.BUTTON_TEXT}
          <TbArrowRight aria-hidden />
        </S.ScheduleLink>
      </S.Schedule>
    </S.ScheduleWrapper>
  )
}

export default memo(Schedule)
