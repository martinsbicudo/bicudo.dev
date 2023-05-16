import { memo } from 'react'

import { useLang } from '~/hooks'

import * as S from './styles'

const Schedule = () => {
  const lang = useLang()

  return (
    <S.ScheduleWrapper>
      <S.Schedule>
        <S.ScheduleTitle>{lang.HOME.SCHEDULE.TITLE}</S.ScheduleTitle>
        <S.ScheduleLink
          href="https://superpowered.me/martinsbicudo"
          target="_blank"
        >
          {lang.HOME.SCHEDULE.BUTTON_TEXT.DESKTOP}
        </S.ScheduleLink>
      </S.Schedule>
    </S.ScheduleWrapper>
  )
}

export default memo(Schedule)
