import HeatMap from 'react-best-heatmap'

import { format } from 'date-fns'

import CONSTANTS from '~/constants'

import { GithubContributionsProps } from './interface'
import legend from './legend'
import * as S from './styles'

const GithubContributions = ({ contributions }: GithubContributionsProps) => {
  const rangeDays = CONSTANTS.GITHUB_CONTRIBUTIONS.RANGE_DAYS

  const getContributionValueLabel = (value: number) => {
    if (value === 0) return 'No contributions'
    return `${value} contribution${value > 1 ? 's' : ''}`
  }

  const renderGithubHeatmap = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - rangeDays)

    const values = contributions.map((contribution) => {
      const value = contribution.value
      const date = new Date(contribution.date)

      return {
        value,
        date: new Date(contribution.date),
        valueLabel: `${getContributionValueLabel(
          contribution.value
        )} | ${format(date, 'dd LLL yyyy')}`,
      }
    })

    return (
      <HeatMap
        startDate={startDate}
        values={values}
        rangeDays={rangeDays}
        legend={legend}
      />
    )
  }

  return (
    <S.GithubContributionsWrapper>
      <S.GithubContributionsTitle>
        The last <span>{rangeDays}</span> days contributions
      </S.GithubContributionsTitle>
      {renderGithubHeatmap()}
    </S.GithubContributionsWrapper>
  )
}

export default GithubContributions
