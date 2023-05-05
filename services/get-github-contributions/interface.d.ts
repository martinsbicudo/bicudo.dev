export type ContributionDaysType = {
  count: number
}

export type ContributionType = {
  week: number
  days: ContributionDaysType[]
}

export type ContributionsDataType = {
  year: string
  contributions: ContributionType[]
}

export type ResultContributionType = {
  value: number
  date: string
}
