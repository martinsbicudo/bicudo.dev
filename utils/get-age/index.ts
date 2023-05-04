import { differenceInYears, parse } from 'date-fns'

const getAge = (bd) => {
  const date = parse(bd, 'dd/MM/yyyy', new Date())
  const age = differenceInYears(new Date(), date)
  return age
}

export default getAge
