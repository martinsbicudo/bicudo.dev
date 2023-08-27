import { useState, useEffect } from 'react'
import HeatMap from 'react-best-heatmap'

import { format } from 'date-fns'

import { GITHUB, HOME } from '~/constants'
import { getGithubContributions } from '~/services'

import legend from './legend'
import Placeholder from './Placeholder'
import * as S from './styles'

const GithubContributions = () => {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const rangeDays = GITHUB.CONTRIBUTIONS.RANGE_DAYS

  const getContributions = async () => {
    const data = await getGithubContributions()
    setContributions(data)
    setLoading(false)
  }

  const getContributionValueLabel = (value: number) => {
    if (value === 0) return 'No contributions'
    return `${value} contribution${value > 1 ? 's' : ''}`
  }

  const renderGithubHeatmap = () => {
    if (loading) return <Placeholder />

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

  useEffect(() => {
    getContributions()
  }, [])

  return (
    <S.GithubContributionsWrapper>
      <S.GithubContributionsTitle>
        {HOME.CONTRIBUTIONS.TITLE}
      </S.GithubContributionsTitle>
      {renderGithubHeatmap()}
    </S.GithubContributionsWrapper>
  )
}

export default GithubContributions
