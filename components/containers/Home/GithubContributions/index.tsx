import HeatMap from 'react-best-heatmap'

import { format } from 'date-fns'

import { CONTRIBUTIONS } from './constants'
import { GithubContributionsProps } from './interface'
import legend from './legend'
import * as S from './styles'

const GithubContributions = ({ contributions }: GithubContributionsProps) => {
  const getContributionValueLabel = (value: number) => {
    if (value === 0) return 'No contributions'
    return `${value} contribution${value > 1 ? 's' : ''}`
  }

  const renderGithubHeatmap = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - CONTRIBUTIONS.RANGE_DAYS)

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
        rangeDays={CONTRIBUTIONS.RANGE_DAYS}
        legend={legend}
      />
    )
  }

  return (
    <S.GithubContributionsWrapper>
      <S.GithubContributionsTitle>
        The last <span>{CONTRIBUTIONS.RANGE_DAYS}</span> days contributions
      </S.GithubContributionsTitle>
      {renderGithubHeatmap()}
    </S.GithubContributionsWrapper>
  )
}

export default GithubContributions
