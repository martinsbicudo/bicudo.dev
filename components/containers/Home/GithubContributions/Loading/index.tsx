import HeatMap from 'react-best-heatmap'

import CONSTANTS from '~/constants'

import legend from '../legend'
import * as S from './styles'

const Loading = () => {
  const rangeDays = CONSTANTS.GITHUB_CONTRIBUTIONS.RANGE_DAYS

  const renderGithubHeatmap = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - rangeDays)

    return (
      <S.LoadingWrapper>
        <HeatMap
          startDate={startDate}
          values={[]}
          rangeDays={rangeDays}
          legend={legend}
        />
      </S.LoadingWrapper>
    )
  }

  return renderGithubHeatmap()
}

export default Loading
