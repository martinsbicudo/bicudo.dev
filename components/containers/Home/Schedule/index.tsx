import { memo } from 'react'

import { HOME } from '~/constants'

import * as S from './styles'

const Schedule = () => {
  return (
    <S.ScheduleWrapper>
      <S.Schedule>
        <S.ScheduleContent>
          <S.ScheduleTitle>{HOME.SCHEDULE.TITLE}</S.ScheduleTitle>
          <S.ScheduleLink
            href="https://superpowered.me/martinsbicudo"
            target="_blank"
          >
            {HOME.SCHEDULE.BUTTON_TEXT.DESKTOP}
          </S.ScheduleLink>
        </S.ScheduleContent>
      </S.Schedule>
    </S.ScheduleWrapper>
  )
}

export default memo(Schedule)
