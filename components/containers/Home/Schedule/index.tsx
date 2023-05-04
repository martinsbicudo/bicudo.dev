import { memo } from 'react'

import * as S from './styles'

const Schedule = () => (
  <S.ScheduleWrapper>
    <S.Schedule>
      <S.ScheduleTitle>Quer marcar um papo comigo?</S.ScheduleTitle>
      <S.ScheduleLink
        href="https://superpowered.me/martinsbicudo"
        target="_blank"
      >
        clique aqui
      </S.ScheduleLink>
    </S.Schedule>
  </S.ScheduleWrapper>
)

export default memo(Schedule)
