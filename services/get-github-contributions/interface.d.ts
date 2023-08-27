export type ContributionType = {
  week: number
  count: number
}

export type ContributionsDataType = {
  year: string
  contributions: ContributionType[]
}

export type ResultContributionType = {
  value: number
  date: string
}
