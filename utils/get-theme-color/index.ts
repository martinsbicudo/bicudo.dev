import { GetThemeColorParams } from './interface'

const getThemeColor =
  (
    name: keyof GetThemeColorParams['theme']['colors'],
    before = (_: string): string => _
  ) =>
  ({ theme }: GetThemeColorParams) => {
    const color = theme.colors[name] as string
    return before(color)
  }

export default getThemeColor
