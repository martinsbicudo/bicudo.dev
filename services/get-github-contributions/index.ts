import axios from 'axios'
import { getDayOfYear, getYear, format } from 'date-fns'
import https from 'https'

import { GITHUB } from '~/constants'

import {
  ContributionsDataType,
  ContributionType,
  ResultContributionType,
} from './interface'

const getGithubContributionsYear = async (year: number) =>
  await axios.get<ContributionsDataType>(`/api/github-contributions/${year}`, {
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  })

const getDayToDate = (year: number, day: number) => {
  const date = new Date(year, 0, day)
  return format(date, 'MM/dd/yyyy')
}

const getContributionsYearDates = (year: number, data: ContributionType[]) => {
  if (data.length) {
    const contributions = data.map((value, i) => ({
      value: value.count,
      date: getDayToDate(year, i + 1),
    }))

    return contributions
  }

  return []
}

const getGithubContributionsValues = (
  contributions: ResultContributionType[][]
) => {
  const values = contributions.reduce((acc, value) => [...acc, ...value], [])

  return values
}

const getGithubContributions = async () => {
  const currentDate = new Date()
  const currentYear = getYear(currentDate)
  const currentDayOfYear = getDayOfYear(currentDate)

  const years = [currentYear]

  if (currentDayOfYear < GITHUB.CONTRIBUTIONS.RANGE_DAYS) {
    years.unshift(currentYear - 1)
  }

  const getGithubContributionsPromises = years.map((year) =>
    getGithubContributionsYear(year)
  )

  const contributions = await Promise.allSettled(
    getGithubContributionsPromises
  ).then((results) =>
    results.map((result, i) => {
      const data =
        result.status === 'fulfilled' ? result.value?.data.contributions : []
      const year = years[i]
      return getContributionsYearDates(year, data)
    })
  )

  return getGithubContributionsValues(contributions)
}

export default getGithubContributions
