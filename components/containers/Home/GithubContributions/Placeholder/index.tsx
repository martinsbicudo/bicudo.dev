import HeatMap from 'react-best-heatmap'

import CONSTANTS from '~/constants'

import legend from '../legend'
import Loading from './Loading'
import * as S from './styles'

const Placeholder = () => {
  const rangeDays = CONSTANTS.GITHUB_CONTRIBUTIONS.RANGE_DAYS

  const renderGithubHeatmap = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - rangeDays)

    return (
      <S.PlaceholderWrapper>
        <Loading />
        <HeatMap
          startDate={startDate}
          values={[]}
          rangeDays={rangeDays}
          legend={legend}
        />
      </S.PlaceholderWrapper>
    )
  }

  return renderGithubHeatmap()
}

export default Placeholder
