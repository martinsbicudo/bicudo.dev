import { getAge } from '~/utils'

const CONSTANTS = {
  SITE: {
    DOMAIN: 'https://bicudo.dev',
  },
  PERSON: {
    NAME: 'Victor M. Bicudo',
    AGE: getAge('31/07/1991'),
  },
  GITHUB_CONTRIBUTIONS: {
    RANGE_DAYS: 90,
  },
}

export default CONSTANTS
